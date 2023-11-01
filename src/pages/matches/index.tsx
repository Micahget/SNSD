// import React, { Suspense } from "react";
// import NewsList from "./ArticleList";
import MatchContainer from "./MatchContiner";

// import ErrorBoundary from "../../components/ErrorBoundary";

const Matches = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Live Matches asdfasdf
        </h2>
      </div>
      <div className="px-0">
        is
        <MatchContainer />
      </div>
    </>
  );
};

export default Matches;
