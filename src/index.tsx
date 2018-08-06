import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components"
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme'

import createHistory from 'history/createBrowserHistory'

export const rootHistory = createHistory();

import { Router } from "react-router-dom";

ReactDOM.render(
  <Router history={rootHistory}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
