import React from "react";

import { transformText } from "./example";
import FormExercise from "./exercise";

const exampleText = "1 2 3 ReactJS Academy is a m a z i n g";

const Page = () => (
  <React.Fragment>
    <h2>Composition</h2>
    <h3>Example</h3>
    Tranform the following text: "{exampleText}" so it becomes
    <strong> REACTJSACADEMYISAMAZING</strong>
    <p>
      Result: <strong>{transformText(exampleText)}</strong>
    </p>
    <h3>Exercise</h3>
    <p>
      Validate the following form composing the validators defined in
      `src/components/functional-programming/composition/exercise/valiators`
    </p>
    <p>
      Fist you'll need to implment the composeValidators function defined in
      `src/components/functional-programming/composition/exercise/index`
    </p>
    <FormExercise />
  </React.Fragment>
);

export default Page;
