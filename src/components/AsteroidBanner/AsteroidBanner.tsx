import React, {
  Fragment,
  FunctionComponent,
  CSSProperties,
  useState,
  useEffect
} from 'react';

import {
  acceptCookies,
  rejectCookies
} from './utilities/acceptCookies';
import { checkCookie } from './utilities/checkCookie';

import './AsteroidBanner.scss';
import Modal from './modal/Modal';

/**
 * @component AsteroidBanner
 *
 * @description - No description
 *
 * @memberof components
 * @author Damian Ryan <damian@damianryan.co.uk>
 *
 * @property {string=} id - Optional ID of the cookie banner.
 * @property {string} title - Title of the banner.
 * @property {string=} siteName - Name of the website managed by the cookie banner.
 * @property {object} cookies - Cookie options object.
 * @property {string} cookies.essential - Essential cookie text.
 * @property {string} cookies.functional - Functional cookie text.
 * @property {string} cookies.analytics - Analytics cookie text.
 * @property {array=} cookies.otherCookies - Optional additional cookies array [NOT USED YET].
 * @property {object} legal - Legal options object.
 * @property {string} legal.legalStatement - Legal statement paragraph for main banner.
 * @property {string} legal.privacyStatement - Full privacy policy paragraph for modal.
 * @property {object} button - Button options object.
 * @property {string} button.acceptAll - Accept all button text.
 * @property {string} button.rejectAll - Reject all button text.
 * @property {string} button.manageCookies - Manage Cookies button text.
 * @property {string} button.modalSave - Save button text for modal.
 * @property {string} button.modalClose - Close button text for modal.
 * @property {string} button.readMore - Read more link text.
 * @property {string} button.readMoreHref - Read more link url / path.
 * @property {string=} backgroundColor - Override background color for banner using Hexadecimal code, RGB or description.
 * @property {string=} textColor - Override text color for banner using Hexadecimal code, RGB or description.
 * @property {CSSProperties} style - CSS Properties for inline customization.
 *
 * @example
 * return {
 *   <AsteroidBanner {...props} />
 * }
 */

const AsteroidBanner: FunctionComponent<AsteroidProps> = ({
  id,
  title,
  siteName,
  cookies,
  buttons,
  legal,
  backgroundColor,
  textColor
}) => {
  const [visible, setVisible] = useState(true);
  const [modal, openModal] = useState(false);

  // Button Props
  const {
    acceptAll,
    rejectAll,
    manageCookies,
    readMore,
    readMoreHref
  } = buttons;

  // Legal Props
  const { legalStatement } = legal;

  // Checks on mount if cookie exists before updating state to false.
  useEffect(() => {
    const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

    if (checkCookie(cookieName.replace(/\s/g, ''))) {
      setVisible(false);
    }
  }, [siteName]);

  // Customise banner style
  const bannerStyle: CSSProperties = {
    color: textColor ?? '#000',
    backgroundColor: backgroundColor ?? '#fff',
    visibility: visible ? 'visible' : 'hidden'
  };

  const modalProps = {
    open: modal,
    buttons: buttons,
    openModal: openModal,
    siteName: siteName,
    cookies: cookies,
    legal: legal
  };

  return (
    <Fragment>
      <Modal {...modalProps} />
      {!modal && (
        <div
          id={id ?? undefined}
          className="asteroid container-fluid position-fixed bottom-0 p-4"
          style={bannerStyle}
        >
          <div className="row">
            <div className="col-sm-12 col-md-10 d-flex flex-column justify-content-center">
              <div className="h2 mb-2">{title}</div>
              <p className="mb-2 mb-sm-2">
                {legalStatement}{' '}
                <a
                  href={readMoreHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {readMore ?? 'Read More'}
                </a>
              </p>
            </div>
            <div className="col-sm-12 col-md-2 d-flex flex-column align-items-center justify-content-center">
              <button
                className="btn btn-primary w-100"
                onClick={() =>
                  acceptCookies(true, true, siteName, setVisible)
                }
              >
                {acceptAll}
              </button>
              <button
                className="btn btn-outline-primary mt-2 w-100"
                onClick={() => rejectCookies(siteName, setVisible)}
              >
                {rejectAll}
              </button>
              <button
                className="btn btn-outline-primary mt-2 w-100"
                onClick={() => openModal(true)}
              >
                {manageCookies}
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export interface ButtonTypes {
  acceptAll: string;
  rejectAll: string;
  manageCookies: string;
  modalSave: string;
  modalClose: string;
  readMore: string;
  readMoreHref: string;
}

export interface LegalTypes {
  legalStatement: string;
  privacyStatement: string;
}

export interface OtherCookies {
  name: string;
  duration: number | string;
  description: string;
  type: string;
}

export interface CookiesTypes {
  essential: string;
  functional: string;
  analytics: string;
  otherCookies: OtherCookies[];
}

export interface AsteroidProps {
  id?: string;
  title: string;
  cookies: CookiesTypes;
  legal: LegalTypes;
  buttons: ButtonTypes;
  backgroundColor?: string;
  textColor?: string;
  buttonTitle?: string;
  siteName?: string;
  style?: CSSProperties;
}

export default AsteroidBanner;
