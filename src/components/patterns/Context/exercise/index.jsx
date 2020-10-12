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
      <h4>Exercise part 1, using context for the GraphQL client</h4>
      <p>
        Our current implementation works, but we won't be able to easly write
        tests for our GraphQL queries because the fetching to the API is
        hardcoded.
      </p>
      <p>
        We can solve that by moving the GraphQL data fetching to the context.
        This way we can "inject" the data fetching dependency via context. Just
        like the{" "}
        <a
          href="https://www.apollographql.com/docs/react/development-testing/testing/#mockedprovider"
          target="_blank"
          rel="noopener noreferrer"
        >
          MockedProvider
        </a>{" "}
        from Apollo
      </p>
      <h4>Tasks part 1:</h4>
      <p>
        <input type="checkbox" /> 1.1. Go to{" "}
        <code>
          src/components/patterns/Context/exercise/GraphQLProvider.jsx
        </code>{" "}
        and create a context for the data fetching client. You can call it
        ClientContext.
      </p>
      <p>
        <input type="checkbox" /> 1.2. Add the ClientContext Provider to the
        GraphQLProvider. Should the ClientContext wrap StoreContext? The other
        way around? Does it matter in this case?
      </p>
      <p>
        <input type="checkbox" /> 1.3. Use the client from the context inside
        your useQuery. You can create a handy useClient custom hook like we did
        in the example{" "}
        <code>
          src/components/patterns/Context/example/modal.jsx : useModal function{" "}
        </code>
      </p>

      <h4>Tasks part 2:</h4>
      <blockquote>
        In large component trees, an alternative we recommend is to pass down a
        dispatch function from useReducer via context...
        <br />
        <br />
        ...If you use context to pass down the state too,{" "}
        <strong>use two different context types</strong> — the dispatch context
        never changes, so components that read it don’t need to rerender unless
        they also need the application state.{" "}
        <a
          href="https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> React docs</strong>
        </a>
      </blockquote>
      <p>🤔 React docs say "use two different context types". Let's do it!</p>
      <p>
        <input type="checkbox" /> 2.1. Create two different context types for
        our StoreContext. One context for the dispatch, and another context for
        the state.
      </p>
      <p>
        <input type="checkbox" /> 2.2. Great! We've implemented task 2.1. but,
        wait 🤔... does it make any difference in our use case? Why? Discuss
        with your peers.
      </p>
      <h4>Tasks part 3:</h4>
      <p>
        <input type="checkbox" /> 3. In{" "}
        <code>
          src/components/patterns/Context/exercise/GraphQLProvider.jsx
        </code>{" "}
        we are using <code>const memoizedHashGql = memoize(hashGql);</code>.
        Should we use useMemo instead? Why?
      </p>
    </div>
  );
};

export default Root;
