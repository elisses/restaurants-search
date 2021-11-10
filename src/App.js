import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
