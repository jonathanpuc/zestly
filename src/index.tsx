import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from "styled-components"
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme'
import Amplify from 'aws-amplify'
import configuration from './aws-exports'
import appsyncConfig from './appsync'
import { history } from './store/configureStore'
import store from './store/configureStore'

Amplify.configure({ ...configuration, ...appsyncConfig })


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
