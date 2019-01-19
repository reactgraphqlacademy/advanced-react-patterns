import React from "react";

import { transformText } from "./example";
import FormExercise from "./exercise";

const exampleText = "1 2 3 ReactJS Academy is a m a z i n g";

const Page = () => (
  <React.Fragment>
    <h2>Function composition</h2>
    <h3>Example</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/functional-programming/composition/example/index.js"
      >
        source code exercise branch &#187;
      </a>
    </p>
    Tranform the following text: "{exampleText}" so it becomes
    <strong> REACTJSACADEMYISAMAZING</strong>
    <p>
      Result: <strong>{transformText(exampleText)}</strong>
    </p>
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/functional-programming/composition/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
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
        href="https://github.com/reactjsacademy/reactjsacademy/blob/master/src/components/payment/checkout/CheckoutForm.js#L230"
      >
        source code
      </a>{" "}
      of the checkout of the{" "}
      <a href="https://reactjs.academy/react-redux-graphql-bootcamp-lisbon/#pricing">
        ReactJS Academy website
      </a>
    </p>
  </React.Fragment>
);

export default Page;
