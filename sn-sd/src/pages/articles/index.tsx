// import React, { Suspense } from "react";
// import NewsList from "./ArticleList";
import ArticleNavigation from "./ArticleNavigation";

// import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending News
        </h2>
      </div>
      <div className="px-0">
        <ArticleNavigation />
      </div>
      {/* <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Comming...</div>}> */}
      {/* <ArticleList /> */}
      {/* </Suspense>
      </ErrorBoundary> */}
    </>
  );
};

export default Articles;
