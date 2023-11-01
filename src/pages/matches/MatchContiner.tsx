import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";

const MatchContainer = () => {
  console.log("I reached to Match Container");
  const matchDispatch = useMatchesDispatch();
  console.log("matchDispatch", matchDispatch);
  useEffect(() => {
    fetchMatches(matchDispatch);
    console.log("I reached to Match Container useEffect");
  }, [matchDispatch]);
  console.log("I reached to Match hehehhe")
  return <Outlet />; // render the child routes
};

export default MatchContainer;
