// src/context/projects/context.tsx
/* eslint-disable */

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";
import {
  reducer,
  initialState,
  MatchesState,
  MatchesActions,
} from "./reducer";

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is
// ProjectsState and here I've set the default value to undefined.

const MatchesStateContext = createContext<MatchesState | undefined>(
  undefined
);

type MatchesDispatch = React.Dispatch<MatchesActions>;

const MatchesDispatchContext = createContext<MatchesDispatch | undefined>(
  undefined
);
export const MatchesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispatch}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};

// src/context/Matches/context.tsx
export const useMatchesState = () => useContext(MatchesStateContext);

export const useMatchesDispatch = () => useContext(MatchesDispatchContext);
