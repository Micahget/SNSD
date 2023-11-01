/* eslint-disable */
import { useArticlesDispatch } from "../../context/articles/context";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchArticles } from "../../context/articles/actions";

const ArticleContainer = () => {
  const articleDispatch = useArticlesDispatch();
  useEffect(() => {
    fetchArticles(articleDispatch);
  }, [articleDispatch]);
  return <Outlet />;
};

export default ArticleContainer;
