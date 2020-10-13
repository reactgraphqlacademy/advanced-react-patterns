import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Context</h2>
    <blockquote>
      Accepts a context object (the value returned from React.createContext) and
      returns the current context value for that context. The current context
      value is determined by the value prop of the nearest
      &lt;MyContext.Provider&gt; above the calling component in the tree.{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://reactjs.org/docs/hooks-reference.html#usecontext"
      >
        React docs
      </a>
    </blockquote>
    <h3>Example</h3>
    <Example />
    <hr />
    <Exercise />

    <h3>Bonus Exercise 1</h3>
    <p>Now that you know how the React Context works:</p>
    <ul>
      <li>
        <input type="checkbox" /> Would use the React Context for the form in
        the previous React Reducer Exercise? What are the pros and cons?
      </li>
      <li>
        <input type="checkbox" /> If you use the React Context for the form,
        would you pass the value of the field and other props to the Field
        component using context or props?
      </li>
      <li>
        <input type="checkbox" /> If you pass the value of the "input" and the
        other required props to the Field component using the React Context, do
        you think it still makes sense to use the React.memo HoC in the Field
        component?
      </li>
    </ul>

    <h3>Bonus Exercise 2</h3>
    <p>
      <input type="checkbox" /> In our current implementation the cache (data
      key in our reducer) for each pair query & variables, we can only send 1
      query at a time. How would you make it possible to send requests
      concurrently?
    </p>
  </React.Fragment>
);

export default Page;
