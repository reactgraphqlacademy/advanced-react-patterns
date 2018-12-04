import React from "react";
import Dropdown, { CLICKED_OUTSIDE_ACTION } from "./Dropdown";
import styled from "styled-components";

export const Ul = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0px 0 0 -18px;
  padding: 18px 18px 36px 18px;
  li {
    padding-left: 0;
    list-style-type: none;
  }
`;

const Button = styled.i`
  cursor: pointer;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: inline-block;
  margin-left: 9px;
  padding-bottom: 2px;
  ${props =>
    props.open
      ? `border-bottom: 8px solid grey;`
      : `border-top: 8px solid grey;`};
`;

const Example = () => (
  <div style={{ paddingBottom: "100px" }}>
    <p>
      Extend the Dropdown so it doesn't close when the user clicks outside the
      dropdown. To achieve this you'll need to edit two different files:
    </p>
    <ul>
      <li>
        In `src/components/patterns/StateReducer/exercise_bonus/Dropdown.jsx`
        you will have to implement the <code>this.setState</code> in the{" "}
        <code>toggleIsOpen = actionType => </code> method.
      </li>
      <li>
        In `src/components/patterns/StateReducer/exercise_bonus/index.js` you
        will have to add a stateReducer prop to the Dropdown component. Hint,
        use a ternary operator based on the type{" "}
        <code>CLICKED_OUTSIDE_ACTION</code>.
      </li>
    </ul>
    <Dropdown
      stateReducer={(state, { type, ...change }) =>
        type === CLICKED_OUTSIDE_ACTION ? state : change
      }
    >
      {({ onToggleDropdown, isOpen }) => (
        <React.Fragment>
          <span>
            Select a color
            <Button open={isOpen} onClick={onToggleDropdown} />
          </span>
          {isOpen ? (
            <Ul>
              <li>Red</li>
              <li>Blue</li>
              <li>Green</li>
            </Ul>
          ) : null}
        </React.Fragment>
      )}
    </Dropdown>
  </div>
);

export default Example;
