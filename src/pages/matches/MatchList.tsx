import React from "react";
import MatchListItem from "./MatchListItem";

const MatchList: React.FC = () => {
    console.log("I reached to Match List")
  return (
    <div className="grid gap-4 mt-5">
      <MatchListItem />
    </div>
  );
};

export default MatchList;
