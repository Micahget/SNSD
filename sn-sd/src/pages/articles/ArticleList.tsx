import React from "react";
import ArticleListItem from "./ArticleListItem";

// I want to make the ArticleList to recieve props from the ArticleNavigation.
// to do that, I need to make the ArticleNavigation to be a parent of ArticleList.
// I will need to pass the props from the ArticleNavigation to the ArticleList.
interface ArticleListProps {
  articleType: string;
}
const ArticleList = ({ articleType }: ArticleListProps) => {
  
  return (
    <div className="grid gap-4 mt-5">
      <ArticleListItem articleType={articleType} />
    </div>
  );
};

export default ArticleList;
