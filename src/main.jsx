import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ThemeProvider } from './styles/theme.jsx';
import GlobalStyles from "./styles/global.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );