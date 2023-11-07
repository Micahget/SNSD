import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";
// import Matches from "./Matches";


const MatchContainer = () => {
  const matchDispatch = useMatchesDispatch();
  useEffect(() => {
    fetchMatches(matchDispatch);
  }, [matchDispatch]);
  return <Outlet />;
};

export default MatchContainer;

