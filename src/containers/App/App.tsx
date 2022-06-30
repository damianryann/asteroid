import React, { FunctionComponent } from 'react';
import logo from '../../assets/logo.svg';

import { AsteroidBanner } from '../../components';
import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const site = 'Bradley Brian Macros Consultancy';
  const legal =
    'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.';

  function deleteCookie() {
    const cookieName =
      `${site.replace(/\s/g, '')}Cookie` ?? 'AsteroidCookie';
    document.cookie = `${cookieName}=; Max-Age=0; path=/;`;

    window.location.reload();
  }

  return (
    <div className="App">
      <AsteroidBanner
        id="id-001"
        title="We use cookies!"
        siteName={site}
        cookies={{
          essential: 'Essential Cookies',
          functional: 'Functional Cookies',
          analytics: 'Analytic Cookies',
          otherCookies: [
            {
              name: 'token',
              duration: 'session',
              description:
                'This cookie is a URL-safe JSON web token (JWT) designed to enable the single sign-on (SSO) web browsing experience.',
              type: 'essential'
            },
            {
              name: '_g',
              duration: 'session',
              description:
                'Is a google cookie',
              type: 'analytics'
            }
          ]
        }}
        legal={{
          legalStatement: legal,
          privacyStatement: '<p>Lorem ipsum</p>'
        }}
        buttons={{
          acceptAll: 'Accept All',
          rejectAll: 'Reject',
          manageCookies: 'Manage Cookies',
          modalSave: 'Save Changes',
          modalClose: 'Close',
          readMore: 'Read More',
          readMoreHref: '/privacy-policy'
        }}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check out the cookie banner!</p>
        <button
          className="btn btn-lg btn-outline-light"
          onClick={deleteCookie}
        >
          Delete cookie
        </button>
      </header>
    </div>
  );
};

export default App;
