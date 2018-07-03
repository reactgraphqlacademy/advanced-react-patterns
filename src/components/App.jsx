import React from 'react'

import withWidth, { LARGE } from './patterns/HigherOrderComponents/exercise/withWidth'
import Question1 from './questions/Question1'
import Question2 from './questions/Question2'
import Question3 from './questions/Question3'
import Question4 from './questions/Question4'
import MenuItem from './patterns/CompoundComponents/exercise/MenuItem'
import Menu from './patterns/CompoundComponents/exercise/Menu'
import Accordion from './patterns/Context/exercise/Accordion'
import Modal from './patterns/Context/example/Modal'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import '../assets/main.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: { open : false }
    }
  }

  toggleMenu = () => {
    if (this.props.width !== LARGE) {
      this.setState({ menu : { open: !this.state.menu.open } })
    }
  }

  render() {
    let isMenuOpen = this.state.menu.open
    const styles = {
      paddingRight: '20px',
      paddingLeft: '20px'
    }

    if (this.props.width === LARGE) {
      isMenuOpen = true
      styles.paddingLeft = 320
    }

    return (
      <Router>
        <Modal>
          <div id="page-wrap">
            <Menu
               isOpen={ isMenuOpen }
               toggleMenu={ this.toggleMenu }
            >
             <p className="text-center">
               <a target="_blank" rel="noopener noreferrer"  href="https://reactjs.academy/react-redux-training-berlin">
                 <img alt="ReactJS Academy" src="/logo.png" />
                 <br />
                 ReactJS.Academy
               </a>
             </p>
             <hr />
             <MenuItem link="/" toggleMenu={ this.toggleMenu }>1. Higher-Order Components</MenuItem>
             <MenuItem link="q2" toggleMenu={ this.toggleMenu }>2. Render Props</MenuItem>
             <MenuItem link="q3" toggleMenu={ this.toggleMenu }>3. Compound Components</MenuItem>
             <Accordion header="I'm an accordion">
                <MenuItem link="q4" toggleMenu={ this.toggleMenu }>4. Context</MenuItem>
             </Accordion>
             <hr />
             <ul className="list-unstyled">
               <li>
                   <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/reactjsacademy" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i> @reactjsacademy</a>
               </li>
               <li>
                   <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/reactjsacademy/" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i> @reactjsacademy</a>
               </li>
             </ul>
            </Menu>
            <div style={ styles } className="view-container">
              <h1>Advanced React Patterns</h1>
              <Route exact path="/" component={Question1} />
              <Route path="/q2" component={Question2} />
              <Route path="/q3" component={Question3} />
              <Route path="/q4" component={Question4} />
            </div>
          </div>
       </Modal>
      </Router>
    )
  }
}

export default withWidth(App)
