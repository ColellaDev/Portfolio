import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import light from "./styles/light.js"
import dark from "./styles/dark.js"
import GlobalStyles from "./styles/global.js"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
