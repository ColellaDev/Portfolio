import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ThemeProvider } from './styles/theme.jsx';
import GlobalStyles from "./styles/global.js";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyles />
        <App />
        <Toaster position="top-right" richColors />
      </ThemeProvider>
    </React.StrictMode>
  );