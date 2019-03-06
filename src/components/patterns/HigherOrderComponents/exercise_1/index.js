import React from "react";
import List from "./List";

const Exercise1 = () => (
  <React.Fragment>
    <p>Display a list of gists from https://api.github.com/gists/public</p>
    <List url="https://api.github.com/gists/public?per_page=5" />
  </React.Fragment>
);

export default Exercise1;
