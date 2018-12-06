import React from 'react'
import themes from '../theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

// First you need to create your `ThemeContext` (use React.CreateContext());

class ThemeProvider extends React.Component {

  // You should heep track of some sort of state to toggle the theme from `light` to `dark`
  // (see the themes.js file)
  state = {
    theme: "???"
  }

  handleThemeToggle = () => {
    /*
      Toggle the theme state using `this.setState`.
      remember you can call this function with a funcion as a parameter:
      `this.setState(prevState => {}); // prevState is a reference to the actual previous state.
      remember that `this.setState` is asynchronous
      TODO: link to setState documentation!
    */
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

const ThemeConsumer = "???"

export {
  ThemeProvider,
  ThemeConsumer // what should be the value of this variable ?? ThemeContext.???
 }
