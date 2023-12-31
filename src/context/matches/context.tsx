// src/context/projects/context.tsx
/* eslint-disable */


import React, { createContext, useContext, useReducer } from "react";
import {
  reducer,
  initialState,
  MatchesState,
  MatchesActions,
} from "./reducer";

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
  console.log("state in matches provider", state);

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
