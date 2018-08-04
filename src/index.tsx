import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components"
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './theme'

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
