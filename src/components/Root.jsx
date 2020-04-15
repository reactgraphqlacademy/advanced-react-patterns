import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./patterns/Context/example/Modal";
import { GraphQLProvider } from "./patterns/Context/exercise/GraphQLProvider";
import { createClient } from "./patterns/Context/exercise/utils";

const client = createClient({ url: "https://rickandmortyapi.com/graphql/" });

const Root = ({ children }) => (
  <GraphQLProvider client={client}>
    <Router>
      <Modal>{children}</Modal>
    </Router>
  </GraphQLProvider>
);

export default Root;
