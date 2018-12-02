import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import Modal from "./patterns/Context/example/Modal";
import { counter } from "./patterns/HigherOrderComponents/exercise_bonus/utils/redux-counter";
import { Provider } from "./patterns/Context/xbonus/Provider";

// Don't do window.__store ever!! this is only to avoid using the Provider until the context exercise
// where you'll implement the Provider
window.__store = createStore(counter);

const Root = ({ children }) => (
  <Router>
    <Modal>{children}</Modal>
  </Router>
);

export default Root;
