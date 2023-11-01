// src/context/projects/context.tsx
/* eslint-disable */

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";
import {
  reducer,
  initialState,
  ArticlesState,
  ArticlesActions,
} from "./reducer";

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is
// ProjectsState and here I've set the default value to undefined.

const ArticlesStateContext = createContext<ArticlesState | undefined>(
  undefined
);

type ArticlesDispatch = React.Dispatch<ArticlesActions>;

const ArticlesDispatchContext = createContext<ArticlesDispatch | undefined>(
  undefined
);
export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

// src/context/Articles/context.tsx
export const useArticlesState = () => useContext(ArticlesStateContext);

export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);
