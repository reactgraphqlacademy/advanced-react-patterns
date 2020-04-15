import React, { useReducer, useContext, useEffect } from "react";
import { memoize, hashGql, createClient } from "./utils";

const RECEIVE_DATA = "RECEIVE_DATA";
const SET_ERROR = "SET_ERROR";

export const StoreContext = React.createContext();
// 🚧 1.1 Create a context for the data fetching client

const reducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: { ...state.data, ...action.payload },
      };
    case SET_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const GraphQLProvider = ({
  children,
  initialState = {
    data: {},
    error: null,
    loading: true,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🚧 Part 1.2. Add your ClientProvider inside the return
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

// 🚧 Bonus exercise, should we use useMemo for this memoized function? Why?
const memoizedHashGql = memoize(hashGql);

export const useQuery = (query, { variables }) => {
  // 🚧 1.3. Use the client from the context, instead of this hardcoded implementation. You can create a handy useClient custom hook (almost implemented at the end of the file).
  // Why moving the client to the context? For testing. E.g. https://www.apollographql.com/docs/react/development-testing/testing/#mockedprovider
  const client = createClient({ url: "https://rickandmortyapi.com/graphql/" });
  const [state, dispatch] = useContext(StoreContext);
  const { loading, error, data: cache } = state;
  const cacheKey = memoizedHashGql(query, variables);
  const data = cache && cache[cacheKey];

  useEffect(() => {
    if (data) {
      return;
    }

    client
      .query({ query, variables })
      .then(({ data, error }) => {
        dispatch({
          type: RECEIVE_DATA,
          payload: { [cacheKey]: data, error },
        });
      })
      .catch((error) =>
        dispatch({
          type: SET_ERROR,
          error,
        })
      );
  }, [query, cacheKey, variables, dispatch, data]);

  return { data, loading, error };
};

export const useClient = () => {
  const client = null; // 🚧 get the client from the context here
  if (!client) {
    throw new Error(
      "No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider"
    );
  }

  return { client };
};
