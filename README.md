# Asteroid Cookie Banner

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### How do I use this component

To use this component you must use it in the following way:

```
    <AsteroidBanner
        id="id-001"
        title="We use cookies!"
        siteName="Ad Astra Labs"
        cookies={{
          essential: 'Essential Cookies',
          functional: 'Functional Cookies',
          analytics: 'Analytic Cookies',
          otherCookies: []
        }}
        legal={{
          legalStatement: 'Lorem ipsum',
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
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
