import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={isDarkAtom ? darkTheme : lightTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
