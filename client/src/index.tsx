import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={{ ...Theme }}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
