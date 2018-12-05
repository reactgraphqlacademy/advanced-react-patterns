import React from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

export const Ul = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0px 0 0 -18px;
  padding: 18px 18px 36px 18px;
  background-color: white;
  z-index: 99;
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
      Extend the Dropdown so it can close when the user presses on the ESC key.
      Then implement two Dropdowns on this page, one that closes on ESC pressed,
      and another Dropdown that doesn't close on ESC pressed. To achieve this
      you'll need to edit two files.
    </p>
    <ul>
      <li>
        In `src/components/patterns/StateReducer/exercise_bonus/index.js` you
        will have to add a stateReducer prop to one of the Dropdown components.
      </li>
      <li>
        In `src/components/patterns/StateReducer/exercise_bonus/Dropdown.js` you
        will have to add some code to handle the key pressed event.
      </li>
    </ul>
    <h5>Close Dropdown on ESC pressed</h5>
    <Dropdown>
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

    <h5>Don't close Dropdown on ESC pressed</h5>
    <Dropdown>
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
