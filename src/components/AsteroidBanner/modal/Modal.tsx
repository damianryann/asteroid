import React, { FunctionComponent } from 'react';
import {
  ButtonTypes,
  CookiesTypes,
  LegalTypes
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
  const { essential, functional, analytics } = cookies;
  const { privacyStatement } = legal;
  const { modalSave, modalClose } = buttons;

  return (
    <div
      className={open ? 'modal fade show' : 'modal fade'}
      id={id ? `${id}-modal` : undefined}
      aria-labelledby={
        id ? `${id}-modal-label` : 'shuttle-modal-label'
      }
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable mw-800-px">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={id ? `${id}-modal-label` : 'shuttle-modal-label'}
            >
              {siteName ?? 'Manage Cookies'}
            </h5>
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
                      <div className="col-md-4">
                        <h2 className="fs-5">{essential}</h2>
                        <label
                          className="switch"
                          htmlFor="essential-cookies-toggle"
                          aria-label="Essential Cookies always toggled true."
                        >
                          <input
                            id="essential-cookies-toggle"
                            name="essential-cookies-toggle"
                            type="checkbox"
                            checked
                            disabled
                          />
                          <span className="slider" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <h2 className="fs-5">{functional}</h2>
                        <label
                          className="switch"
                          htmlFor="functional-cookies-toggle"
                          aria-label="Functional Cookies toggle"
                        >
                          <input
                            id="functional-cookies-toggle"
                            name="functional-cookies-toggle"
                            type="checkbox"
                          />
                          <span className="slider" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <h2 className="fs-5">{analytics}</h2>
                        <label
                          className="switch"
                          htmlFor="analytics-cookies-toggle"
                          aria-label="Analytics Cookies toggle"
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              onClick={() => openModal(false)}
            >
              {modalClose}
            </button>
            <button type="button" className="btn btn-secondary">
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
}

export default Modal;
