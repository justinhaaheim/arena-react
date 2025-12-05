// @flow

import React from 'react';
import ReactDOM from 'react-dom/client';
import {CssVarsProvider, extendTheme} from '@mui/joy/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Define custom theme matching the Bootstrap custom colors
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#134f5c',
          solidHoverBg: '#0f3e47',
          solidActiveBg: '#0a2d33',
        },
        warning: {
          solidBg: '#faa732',
          solidHoverBg: '#f39516',
          solidActiveBg: '#d27d0a',
        },
      },
    },
  },
  fontFamily: {
    body: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    display: 'Lato',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
