import React from "react";
import { Route, Redirect } from "react-router-dom";

import Root from "./Root";
import withWidth, {
  LARGE,
} from "./patterns/HigherOrderComponents/exercise_2/withWidth";
import HigherOrderComponentsPage from "./patterns/HigherOrderComponents/Page";
import RenderPropsPage from "./patterns/RenderProps/Page";
import CompoundComponentsPage from "./patterns/CompoundComponents/Page";
import ContextPage from "./patterns/Context/Page";
import MenuItem from "./patterns/CompoundComponents/exercise/MenuItem";
import Menu from "./patterns/CompoundComponents/exercise/Menu";
import CompositionPage from "./functional-programming/composition/Page";
import ClosurePage from "./functional-programming/closure/Page";
import MemoizationPage from "./functional-programming/memoization/Page";
import HookReducerPage from "./patterns/HookReducer/Page";
import CustomHooksPage from "./patterns/CustomHooks/Page";
import ThemingPage from "./patterns/Theming/Page";
import VariantsPage from "./patterns/Variants/Page";
import HooksPage from "./patterns/Hooks/Page";
import RGALogo from "./RGALogo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: { open: false },
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
      paddingLeft: "20px",
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
              <a target="_blank" href="https://reactgraphql.academy">
                <RGALogo />
              </a>
            </p>
            <hr />
            <MenuItem link="/closure" toggleMenu={this.toggleMenu}>
              1. Closure
            </MenuItem>
            <MenuItem link="/memoization" toggleMenu={this.toggleMenu}>
              2. Memoization
            </MenuItem>
            <MenuItem link="/composition" toggleMenu={this.toggleMenu}>
              3. Function composition
            </MenuItem>
            <hr />
            <MenuItem
              link="/higher-order-components"
              toggleMenu={this.toggleMenu}
            >
              4. Higher-Order Components
            </MenuItem>
            <MenuItem link="/render-props" toggleMenu={this.toggleMenu}>
              5. Render Props
            </MenuItem>
            <MenuItem link="/hooks" toggleMenu={this.toggleMenu}>
              6. Hooks
            </MenuItem>
            <MenuItem link="/custom-hooks" toggleMenu={this.toggleMenu}>
              7. Custom Hooks
            </MenuItem>
            <MenuItem link="/hook-reducer" toggleMenu={this.toggleMenu}>
              8. Hook Reducer
            </MenuItem>
            <MenuItem link="/context" toggleMenu={this.toggleMenu}>
              9. Context
            </MenuItem>
            <hr />
            <ul className="list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/reactgqlacademy"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-twitter" /> @reactgqlacademy
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/reactgraphqlacademy/"
                  className="btn-social btn-outline"
                >
                  <i className="fa fa-fw fa-instagram" /> @reactgraphqlacademy
                </a>
              </li>
            </ul>
          </Menu>
          <div style={styles} className="view-container">
            <Route exact path="/" render={() => <Redirect to="/closure" />} />
            <Route path="/composition" component={CompositionPage} />
            <Route path="/memoization" component={MemoizationPage} />
            <Route path="/closure" component={ClosurePage} />
            <Route
              path="/higher-order-components"
              component={HigherOrderComponentsPage}
            />
            <Route path="/render-props" component={RenderPropsPage} />
            <Route path="/hook-reducer" component={HookReducerPage} />
            <Route path="/hooks" component={HooksPage} />
            <Route path="/custom-hooks" component={CustomHooksPage} />
            <Route
              path="/compound-components"
              component={CompoundComponentsPage}
            />
            <Route path="/context" component={ContextPage} />
            <Route path="/theming" component={ThemingPage} />
            <Route path="/variants" component={VariantsPage} />
          </div>
        </div>
      </Root>
    );
  }
}

export default withWidth(App);
