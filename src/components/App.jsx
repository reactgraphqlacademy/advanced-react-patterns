import React from "react";
import { Route } from "react-router-dom";

import Root from "./Root";
import withWidth, {
  LARGE
} from "./patterns/HigherOrderComponents/exercise_2/withWidth";
import HigherOrderComponentsPage from "./patterns/HigherOrderComponents/Page";
import RenderPropsPage from "./patterns/RenderProps/Page";
import CompoundComponentsPage from "./patterns/CompoundComponents/Page";
import ContextPage from "./patterns/Context/Page";
import MenuItem from "./patterns/CompoundComponents/exercise/MenuItem";
import Menu from "./patterns/CompoundComponents/exercise/Menu";
import Accordion from "./patterns/Context/exercise/components/Accordion";
import CompositionPage from "./functional-programming/composition/Page";
import ClosurePage from "./functional-programming/closure/Page";
import StateReducerPage from "./patterns/StateReducer/Page";
import Theming from './patterns/Theming/Page';
import Variants from './patterns/Variants/Page'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: { open: false }
    };
  }

  toggleMenu = () => {
    if (this.props.width !== LARGE) {
      this.setState({ menu: { open: !this.state.menu.open } });
    }
  };

  render() {
    let isMenuOpen = this.state.menu.open;
    const styles = {
      paddingRight: "20px",
      paddingLeft: "20px"
    };

    if (this.props.width === LARGE) {
      isMenuOpen = true;
      styles.paddingLeft = 320;
    }

    return (
      <Root>
        <div id="page-wrap">
          <Menu isOpen={isMenuOpen} toggleMenu={this.toggleMenu}>
            <p className="text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactjs.academy/react-redux-training-berlin"
              >
                <img alt="ReactJS Academy" src="/logo.png" />
                <br />
                ReactJS.Academy
              </a>
            </p>
            <hr />
            <MenuItem link="/composition" toggleMenu={this.toggleMenu}>
              1. Functional composition
            </MenuItem>
            <MenuItem link="/closure" toggleMenu={this.toggleMenu}>
              2. Closure
            </MenuItem>
            <hr />
            <MenuItem
              link="/higher-order-components"
              toggleMenu={this.toggleMenu}
            >
              3. Higher-Order Components
            </MenuItem>
            <MenuItem link="/render-props" toggleMenu={this.toggleMenu}>
              4. Render Props
            </MenuItem>
            <MenuItem link="/state-reducer" toggleMenu={this.toggleMenu}>
              5. State Reducer
            </MenuItem>
            <hr />
            <MenuItem link="/theming" toggleMenu={this.toggleMenu}>6. Theming</MenuItem>
            <MenuItem link="/variants" toggleMenu={this.toggleMenu}>7. Variants</MenuItem>
            <hr />
            <MenuItem link="/compound-components" toggleMenu={this.toggleMenu}>
              8. Compound Components
            </MenuItem>
            <Accordion>
              <MenuItem link="/context" toggleMenu={this.toggleMenu}>
                9. Context
              </MenuItem>
            </Accordion>
            <hr />
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/reactjsacademy"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-twitter" /> @reactjsacademy
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/reactjsacademy/"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-instagram" /> @reactjsacademy
                </a>
              </li>
            </ul>
          </Menu>
          <div style={styles} className="view-container">
            <Route
              exact
              path="/"
              render={() => (
                <h1>
                  Welcome to functional programming and advanced patterns in
                  React!
                </h1>
              )}
            />
            <Route path="/composition" component={CompositionPage} />
            <Route path="/closure" component={ClosurePage} />
            <Route
              path="/higher-order-components"
              component={HigherOrderComponentsPage}
            />
            <Route path="/render-props" component={RenderPropsPage} />
            <Route path="/state-reducer" component={StateReducerPage} />
            <Route
              path="/compound-components"
              component={CompoundComponentsPage}
            />
            <Route path="/context" component={ContextPage} />
            <Route path="/theming" component={Theming} />
            <Route path="/variants" component={Variants} />
          </div>
        </div>
      </Root>
    );
  }
}

export default withWidth(App);
