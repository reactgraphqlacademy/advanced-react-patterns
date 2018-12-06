import React from 'react';
import ThemeProvider from './components/ThemeContext'
import App from './components/App'

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

export default Root;
