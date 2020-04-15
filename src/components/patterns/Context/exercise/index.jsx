/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { useQuery } from "./GraphQLProvider";

const Root = () => {
  const { data, loading, error } = useQuery(
    `query character($id: ID! = 1) {
        character(id: $id) {
          image 
          name
        }
      }`,
    { variables: { id: 2 } }
  );
  if (loading) {
    return "loading";
  } else if (error) {
    return "Oops, something went wrong";
  }

  return (
    <div>
      <h3>🏋️‍♀️Exercise</h3>
      <h4>
        🎯 The goal of this exercise is to use context in some real-world use
        cases, along with custom hooks and some other React additional Hooks
      </h4>
      <img src={data.character.image} alt={data.character.name} />
    </div>
  );
};

export default Root;
