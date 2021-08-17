import React from 'react';
import MainRouter from './pages/router';
import { Provider } from 'react-redux';
import Store from './config/Store/store.config';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
