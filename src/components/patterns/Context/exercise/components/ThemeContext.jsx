import React from 'react'
import themes from '../theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

export const ThemeContext = React.createContext({});

class ThemeProvider extends React.Component {
  state = {
    theme: "light"
  }

  handleThemeToggle = () => {
    this.setState(prevState => ({theme: prevState.theme === 'light' ? 'dark' : 'light'}))
  }

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    console.log('theme => ', themes[theme]);
    return (
      <ThemeContext.Provider value={{theme, setValue: this.handleThemeToggle}}>
        <StyledProvider theme={themes[theme]}>
          {children}
        </StyledProvider>
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
