import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchArticles } from "../../context/articles/actions";
import { useMatchesDispatch } from "../../context/matches/context";

const MatchContainer = () => {
  const matchDispatch = useMatchesDispatch();
  useEffect(() => {
    fetchArticles(matchDispatch);
  }, [matchDispatch]);
  return <Outlet />;
};

export default MatchContainer;
