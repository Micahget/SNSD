// import React, { Suspense } from "react";
// import NewsList from "./ArticleList";
import ArticleList from "./ArticleList";

// import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending News
        </h2>
      </div>
      {/* <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Comming...</div>}> */}
      <ArticleList />
      {/* </Suspense>
      </ErrorBoundary> */}
    </>
  );
};

export default Articles;
