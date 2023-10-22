import React from "react";
import ArticleListItem from "./ArticleListItem";

const ArticleList: React.FC = () => {
  return (
    <div className="grid gap-4 mt-5">
      <ArticleListItem />
    </div>
  );
};

export default ArticleList;
