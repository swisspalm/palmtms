import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';


import { Amplify, Auth, Logger } from "aws-amplify";

import '@aws-amplify/ui-react/styles.css';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

Amplify.Logger.LOG_LEVEL = 'DEBUG';

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_GRAPHQL_URL,
  aws_appsync_region: process.env.REACT_APP_REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  Auth: {
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_COGNTIO_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ['email', 'openid', `${process.env.REACT_APP_BACKEND_URL}/plaid.rw}`],
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: "plaidapi",
        endpoint: process.env.REACT_APP_BACKEND_URL,
        region: process.env.REACT_APP_REGION,
        clientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
        custom_header: async () => {
          return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
        }
      }
    ]
  }
});

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




