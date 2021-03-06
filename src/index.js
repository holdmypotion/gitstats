import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import config from './config'

// load config variable as soon as app loads
Object.keys(config).forEach(key => {
  window[key] = config[key];
});

// Initialize sentry for error logging in production
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage') {
  console.log("SENTRY INITIALIZED !");
  Sentry.init({ dsn: window.SENTRY_URL });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
