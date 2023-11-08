/* eslint-disable */
import { useArticlesDispatch } from "../../context/articles/context";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchArticleById, fetchArticles } from "../../context/articles/actions";

const ArticleContainer = () => {
  const articleDispatch = useArticlesDispatch();
  // const { articleId } = useParams();
  // if (!articleId) return null;
  useEffect(() => {
    fetchArticles(articleDispatch);
    // console.log("articleId", articleId)
    // fetchArticleById(articleDispatch, articleId.toString());
  }, [articleDispatch]);
  return <Outlet />;
};

export default ArticleContainer;
