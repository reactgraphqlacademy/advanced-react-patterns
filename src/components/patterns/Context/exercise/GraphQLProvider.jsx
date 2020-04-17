import React, { useReducer, useContext, useEffect } from "react";
import { memoize, hashGql } from "./utils";

const RECEIVE_DATA = "RECEIVE_DATA";
const SET_ERROR = "SET_ERROR";

const CacheContext = React.createContext();
const DispatchGQLContext = React.createContext();
const ClientContext = React.createContext();

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
  client,
  initialState = {
    data: {},
    error: null,
    loading: true,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ClientContext.Provider value={{ client }}>
      {/* Anwser to task 2: It doesn't make sense in this case to split it in the following two contexts */}
      <DispatchGQLContext.Provider value={{ dispatch }}>
        <CacheContext.Provider value={{ state }}>
          {children}
        </CacheContext.Provider>
      </DispatchGQLContext.Provider>
    </ClientContext.Provider>
  );
};

const memoizedHashGql = memoize(hashGql);

export const useQuery = (query, { variables }) => {
  const { client } = useClient();
  const { state } = useGQLCache(CacheContext);
  const { dispatch } = useGQLDispatch();
  const { loading, error, data: cache } = state;
  const cacheKey = memoizedHashGql(query, variables);
  const data = cache && cache[cacheKey];

  useEffect(() => {
    if (data || error) {
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

export const useGQLDispatch = () => {
  const { dispatch } = useContext(DispatchGQLContext) || {};
  if (!dispatch) {
    throw new Error("No DispatchGQLContext found!");
  }

  return { dispatch };
};

export const useGQLCache = () => {
  const { state } = useContext(CacheContext) || {};
  if (!state) {
    throw new Error("No CacheContext found!");
  }

  return { state };
};

export const useClient = () => {
  const { client } = useContext(ClientContext) || {};
  if (!client) {
    throw new Error(
      "No GraphQL client found, please make sure that you are providing a client prop to the GraphQL Provider"
    );
  }

  return { client };
};
