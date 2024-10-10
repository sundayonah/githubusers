import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { ClerkProvider } from '@clerk/clerk-react';

// import { Auth0Provider } from '@auth0/auth0-react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
   throw new Error('Missing Publishable Key!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <GithubProvider>
            <App />
         </GithubProvider>
      </ClerkProvider>
   </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
