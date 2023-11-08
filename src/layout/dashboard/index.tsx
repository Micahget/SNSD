// import * as React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Matches from "../../pages/matches";
// import MatchContainer from "../../pages/matches/MatchContiner";

const AccountLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        
        <Matches />
        <Outlet />
      </main>
    </>
  );

}

export default AccountLayout;
