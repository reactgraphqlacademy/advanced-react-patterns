import React from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

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
import CompositionPage from "./functional-programming/composition/Page";
import ClosurePage from "./functional-programming/closure/Page";
import StateReducerPage from "./patterns/StateReducer/Page";
import Theming from "./patterns/Theming/Page";
import Variants from "./patterns/Variants/Page";

const StyledGithubLink = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;
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
        <StyledGithubLink>
          <a
            href="https://github.com/reactjsacademy/advanced-react-patterns"
            target="_blank"
            className="github-corner"
            ariaLabel="View source on GitHub"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 250 250"
              style={{
                fill: "#73CFEF",
                color: "#fff",
                position: "absolute",
                top: 0,
                border: 0,
                right: 0
              }}
              ariaHidden="true"
            >
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                style={{ transformOrigin: "130px 106px" }}
                className="octo-arm"
              />
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
                className="octo-body"
              />
            </svg>
          </a>
        </StyledGithubLink>

        <div id="page-wrap">
          <Menu isOpen={isMenuOpen} toggleMenu={this.toggleMenu}>
            <p className="text-center">
              <a href="https://reactjs.academy">
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
            <MenuItem link="/compound-components" toggleMenu={this.toggleMenu}>
              8. Compound Components
            </MenuItem>

            <MenuItem link="/context" toggleMenu={this.toggleMenu}>
              9. Context
            </MenuItem>

            <MenuItem link="/theming" toggleMenu={this.toggleMenu}>
              5. Theming
            </MenuItem>
            <MenuItem link="/variants" toggleMenu={this.toggleMenu}>
              6. Variants
            </MenuItem>
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
            <h4>
              Clone this repo to do the exercises{" "}
              <a
                href="https://github.com/reactjsacademy/advanced-react-patterns"
                target="_blank"
              >
                https://github.com/reactjsacademy/advanced-react-patterns
              </a>
            </h4>
            {/*
            TODO DEPLOY THE SOLUTION BRANCH AND UNCOMMENT THIS
            <p>
              The branch that is{" "}
              <a href="https://advanced-react-patterns.reactjs.academy">
                deployed here
              </a>{" "}
              is the solution branch.
            </p> */}
            <Route
              exact
              path="/"
              render={() => <Redirect to="/composition" />}
            />
            <Route exact path="/composition" component={CompositionPage} />
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
