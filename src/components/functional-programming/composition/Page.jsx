import React from "react";

import { transformText } from "./example";
import FormExercise from "./exercise";

const exampleText = "1 2 3 React GraphQL Academy is a m a z i n g";

const Page = () => (
  <React.Fragment>
    <h2>Function composition</h2>
    <h3>Example</h3>
    Tranform the following text: "{exampleText}" so it becomes
    <strong> REACTJSACADEMYISAMAZING</strong>
    <p>
      Result: <strong>{transformText(exampleText)}</strong>
    </p>
    <h3>Exercise</h3>
    <p>
      Validate the following form composing the validators defined in
      `src/components/functional-programming/composition/exercise/valiators`. To
      do that you'll need to finish the implementation of the composeValidators
      function defined in
      `src/components/functional-programming/composition/exercise/index`
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
