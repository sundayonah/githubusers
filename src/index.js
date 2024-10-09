import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Auth0Provider
         domain="dev-y2c255m3wdhnotgk.us.auth0.com"
         clientId="H9D75XkTtLfj11c4ArwdV1FBm4Ahr76r"
         authorizationParams={{
            redirect_uri: window.location.origin,
         }}
      >
         <GithubProvider>
            <App />
         </GithubProvider>
      </Auth0Provider>
   </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
