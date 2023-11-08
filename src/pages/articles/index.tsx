// import React, { Suspense } from "react";
// import NewsList from "./ArticleList";
import Favourite from "../favourites";
import ArticleNavigation from "./ArticleNavigation";

// import ErrorBoundary from "../../components/ErrorBoundary";

const Articles = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl  text-slate-700">
          Trending News
        </h2>
      </div>
      <div className="px-0 flex">
        <div className="w-9/12 p-2">
          {" "}
          {/* Takes up 9 out of 12 columns */}
          <ArticleNavigation />
        </div>
        <div className="w-3/12 p-2">
          {" "}
          {/* Takes up 3 out of 12 columns */}
          <Favourite />
        </div>
      </div>
    </>
  );
};



export default Articles;
