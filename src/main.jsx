import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ThemeProvider } from 'styled-components';
import light from "./styles/light.js";
import dark from "./styles/dark.js";
import GlobalStyles from "./styles/global.js";

function Main() {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App toggleTheme={toggleTheme} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);