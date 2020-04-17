/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { transformText } from "./exercise";
import FormExercise from "./bonus";

const exampleText = "1 2 3 React GraphQL Academy is a m a z i n g";

const Page = () => (
  <React.Fragment>
    <h2>Function composition</h2>
    <h3>Exercise</h3>
    With the transformText function we can transform{" "}
    <strong>"{exampleText}"</strong> into
    <strong> "{transformText(exampleText)}"</strong>
    <p>
      Let's make that composition more declarative using a <code>compose</code>{" "}
      function:
    </p>
    <p>
      <input type="checkbox" /> 1. Your first task is to implement the compose
      function. Go to{" "}
      <code>
        {" "}
        src/components/functional-programming/composition/exercise/index.js
      </code>{" "}
      and follow the hints.
    </p>
    <p>
      <input type="checkbox" /> 2. Can you use your <code>compose</code>{" "}
      function to compose HoCs? You can try to use it along with the{" "}
      <code>withWidth</code> at the bottom of the file{" "}
      <code>src/components/App.jsx</code>
    </p>
    <h3>Bonus Exercise</h3>
    <p>
      Validate the following form composing the validators defined in
      <code>
        src/components/functional-programming/composition/bonus/valiators
      </code>
      . To do that you'll need to finish the implementation of the
      composeValidators function defined in
      <code>
        src/components/functional-programming/composition/bonus/index.js
      </code>
    </p>
    <FormExercise />
    <h3>Notes</h3>
    <p>
      You can see a real-world example of this technique to compose validators
      in the{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/reactgraphqlacademy/reactgraphql.academy/blob/master/www/src/components/payment/checkout/CheckoutForm.js#L383"
      >
        source code
      </a>{" "}
      of the checkout of the{" "}
      <a
        href="https://reactgraphql.academy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React GraphQL Academy website
      </a>
    </p>
  </React.Fragment>
);

export default Page;
