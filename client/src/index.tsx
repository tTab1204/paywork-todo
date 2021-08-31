import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={{ ...Theme }}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
