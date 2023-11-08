
import React, { Suspense } from "react";
const MatchList = React.lazy(() => import("./MatchList")); // here we use React.lazy to load the component dynamically. This code means that the component will be loaded only when it is needed. and the Suspense component will show a fallback component while the component is loading. which is the div with the text "Loading..."
// import NewProject from "./NewProject";
import ErrorBoundary from "../../components/ErrorBoundary";

const Matches = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Games
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Comming...</div>}>
          <MatchList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Matches;