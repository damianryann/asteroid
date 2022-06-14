import React, { FunctionComponent, useState } from 'react';
import logo from '../../assets/logo.svg';

import { AsteroidBanner } from '../../components';
import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const [message, setMessage] = useState(false);

  const site = 'Sam Gurungs Consultancy';
  const legal =
    'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.';

  function deleteCookie() {
    const cookieName =
      `${site.replace(/\s/g, '')}Cookie` ?? 'AsteroidCookie';
    document.cookie = `${cookieName}=; Max-Age=0; path=/;`;

    setMessage(true);
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
          otherCookies: []
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
        {message && (
          <div className="alert alert-success fs-5 mt-3" role="alert">
            Please refresh the page!
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
