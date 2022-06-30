import React, { FunctionComponent, useState } from 'react';
import {
  ButtonTypes,
  CookiesTypes,
  LegalTypes,
  OtherCookies
} from '../AsteroidBanner';

import '../AsteroidBanner.scss';

/**
 * @component Modal
 *
 * @description - Modal popup for manage cookies option of banner. Provides granular choice of cookie consent.
 *
 * @memberof AsteroidBanner
 * @author Damian Ryan <damian@damianryan.co.uk>

 * @example
 * return {
 *   <Modal {...props} />
 * }
 */

const Modal: FunctionComponent<ModalProps> = ({
  id,
  buttons,
  open,
  openModal,
  siteName,
  cookies,
  legal
}) => {
  // Importing cookies, buttons and legal
  const { essential, functional, analytics, otherCookies } = cookies;
  const { privacyStatement } = legal;
  const { modalSave, modalClose } = buttons;
  const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

  const [essentialAccordion, setEssentialAccordion] =
    useState<Boolean>(false);
  const [functionalAccordion, setFunctionalAccordion] =
    useState<Boolean>(false);
  const [analyticalAccordion, setAnalyticalAccordion] =
    useState<Boolean>(false);

  return (
    <div
      className={open ? 'modal fade show' : 'modal fade'}
      id={id ? `${id}-modal` : undefined}
      aria-labelledby={
        id ? `${id}-modal-label` : 'asteroid-modal-label'
      }
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable mw-800-px">
        <div className="modal-content">
          <div className="modal-header">
            <h2
              className="modal-title fs-5"
              id={id ? `${id}-modal-label` : 'asteroid-modal-label'}
            >
              {siteName ?? 'Manage Cookies'}
            </h2>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade"
                    id="list-essential"
                    role="tabpanel"
                    aria-labelledby="list-essential-list"
                  >
                    <div
                      className="mb-2"
                      dangerouslySetInnerHTML={{
                        __html: privacyStatement
                      }}
                    />
                    <div className="row">
                      <div className="accordion accordion-flush">
                        <div className="row">
                          <div className="accordion-item col-10 border-bottom-0">
                            <h2
                              className="accordion-header"
                              id="flush-essential"
                            >
                              <button
                                className={
                                  essentialAccordion
                                    ? 'accordion-button collapsed'
                                    : 'accordion-button bg-light text-black'
                                }
                                type="button"
                                aria-expanded={
                                  essentialAccordion
                                    ? 'false'
                                    : 'true'
                                }
                                aria-controls="flush-collapseOne"
                                onClick={() =>
                                  setEssentialAccordion(
                                    !essentialAccordion
                                  )
                                }
                              >
                                {essential}
                              </button>
                            </h2>
                            <div
                              className={
                                essentialAccordion
                                  ? 'accordion-collapse collapse show'
                                  : 'accordion-collapse collapse'
                              }
                              aria-labelledby="flush-essential"
                            >
                              <div className="accordion-body card card-body card-bg border-0 mb-2">
                                <div className="row small">
                                  <div className="fw-bold col-xs-3 col-md-2">
                                    Name:
                                  </div>
                                  <div className="col-xs-9 col-md-10">
                                    <p>
                                      {cookieName.replace(/\s/g, '')}
                                    </p>
                                  </div>
                                  <div className="fw-bold col-xs-3 col-md-2">
                                    Duration:
                                  </div>
                                  <div className="col-xs-9 col-md-10">
                                    <p>1 year</p>
                                  </div>
                                  <div className="fw-bold col-xs-3 col-md-2">
                                    Description:
                                  </div>
                                  <div className="col-xs-9 col-md-10">
                                    <p>
                                      This cookie is required to
                                      ensure your preferences are
                                      stored so we can make sure you
                                      don't get anything you didn't
                                      want.
                                    </p>
                                  </div>
                                </div>

                                {otherCookies.map(
                                  (
                                    cookieData: OtherCookies,
                                    index
                                  ) => {
                                    const {
                                      name,
                                      duration,
                                      description,
                                      type
                                    } = cookieData;

                                    if (type === 'essential') {
                                      return (
                                        <div
                                          key={index}
                                          className="row small"
                                        >
                                          <hr />
                                          <div className="fw-bold col-xs-3 col-md-2">
                                            Name:
                                          </div>
                                          <div className="col-xs-9 col-md-10">
                                            <p>{name}</p>
                                          </div>
                                          <div className="fw-bold col-xs-3 col-md-2">
                                            Duration:
                                          </div>
                                          <div className="col-xs-9 col-md-10">
                                            <p>{duration}</p>
                                          </div>
                                          <div className="fw-bold col-xs-3 col-md-2">
                                            Description:
                                          </div>
                                          <div className="col-xs-9 col-md-10">
                                            <p>{description}</p>
                                          </div>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }
                                ) ?? 'No cookies'}
                              </div>
                            </div>
                          </div>
                          <div className="col-2 m-auto">
                            <label
                              className="switch float-end mb-2"
                              htmlFor="essential-cookies-toggle"
                              aria-label="Essential Cookies toggle."
                            >
                              <input
                                id="essential-cookies-toggle"
                                name="essential-cookies-toggle"
                                type="checkbox"
                              />
                              <span className="slider" />
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="accordion-item col-10 border-bottom-0">
                            <h2
                              className="accordion-header"
                              id="flush-essential"
                            >
                              <button
                                className={
                                  functionalAccordion
                                    ? 'accordion-button collapsed'
                                    : 'accordion-button bg-light text-black'
                                }
                                type="button"
                                aria-expanded={
                                  functionalAccordion
                                    ? 'false'
                                    : 'true'
                                }
                                aria-controls="flush-collapseOne"
                                onClick={() =>
                                  setFunctionalAccordion(
                                    !functionalAccordion
                                  )
                                }
                              >
                                {functional}
                              </button>
                            </h2>
                            <div
                              className={
                                functionalAccordion
                                  ? 'accordion-collapse collapse show'
                                  : 'accordion-collapse collapse'
                              }
                              aria-labelledby="flush-essential"
                            >
                              <div className="accordion-body card card-body card-bg border-0 mb-2">
                                <div className="row small">
                                  {otherCookies.map(
                                    (
                                      cookieData: OtherCookies,
                                      index
                                    ) => {
                                      const {
                                        name,
                                        duration,
                                        description,
                                        type
                                      } = cookieData;

                                      if (type === 'functional') {
                                        return (
                                          <div
                                            key={index}
                                            className="row small"
                                          >
                                            <hr />
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Name:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{name}</p>
                                            </div>
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Duration:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{duration}</p>
                                            </div>
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Description:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{description}</p>
                                            </div>
                                          </div>
                                        );
                                      }
                                      return 'No cookies';
                                    }
                                  ) ?? ''}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-2 m-auto">
                            <label
                              className="switch text-end mb-2"
                              htmlFor="functional-cookies-toggle"
                              aria-label="Functional Cookies toggle."
                            >
                              <input
                                id="functional-cookies-toggle"
                                name="functional-cookies-toggle"
                                type="checkbox"
                              />
                              <span className="slider" />
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="accordion-item col-10 border-bottom-0">
                            <h2
                              className="accordion-header"
                              id="flush-essential"
                            >
                              <button
                                className={
                                  analyticalAccordion
                                    ? 'accordion-button collapsed'
                                    : 'accordion-button bg-light text-black'
                                }
                                type="button"
                                aria-expanded={
                                  analyticalAccordion
                                    ? 'false'
                                    : 'true'
                                }
                                aria-controls="flush-collapseOne"
                                onClick={() =>
                                  setAnalyticalAccordion(
                                    !analyticalAccordion
                                  )
                                }
                              >
                                {analytics}
                              </button>
                            </h2>
                            <div
                              className={
                                analyticalAccordion
                                  ? 'accordion-collapse collapse show'
                                  : 'accordion-collapse collapse'
                              }
                              aria-labelledby="flush-essential"
                            >
                              <div className="accordion-body card card-body card-bg border-0 mb-2">
                                <div className="row small">
                                  {otherCookies.map(
                                    (
                                      cookieData: OtherCookies,
                                      index
                                    ) => {
                                      const {
                                        name,
                                        duration,
                                        description,
                                        type
                                      } = cookieData;

                                      if (type === 'analytics') {
                                        return (
                                          <div
                                            key={index}
                                            className="row small"
                                          >
                                            {!type[0] ?? <hr />}
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Name:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{name}</p>
                                            </div>
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Duration:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{duration}</p>
                                            </div>
                                            <div className="fw-bold col-xs-3 col-md-2">
                                              Description:
                                            </div>
                                            <div className="col-xs-9 col-md-10">
                                              <p>{description}</p>
                                            </div>
                                          </div>
                                        );
                                      }
                                      return '';
                                    }
                                  ) ?? ''}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 m-auto">
                            <label
                              className="switch float-end mb-2"
                              htmlFor="analytics-cookies-toggle"
                              aria-label="Analytics Cookies toggle."
                            >
                              <input
                                id="analytics-cookies-toggle"
                                name="analytics-cookies-toggle"
                                type="checkbox"
                              />
                              <span className="slider" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
              onClick={() => openModal(false)}
            >
              {modalClose}
            </button>
            <button type="button" className="btn btn-primary">
              {modalSave}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ModalProps {
  id?: string;
  open: boolean;
  openModal: Function;
  siteName?: string;
  cookies: CookiesTypes;
  legal: LegalTypes;
  buttons: ButtonTypes;
  children?: JSX.Element | JSX.Element[];
}

export default Modal;
