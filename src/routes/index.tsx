import { createBrowserRouter, Navigate } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import AccountLayout from "../layout/dashboard";
import ArticleContainer from "../pages/articles/ArticleContainer";
import Articles from "../pages/articles";
// import MatchContainer from "../pages/matches/MatchContiner";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/signin" replace /> },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  // {
  //   path: "/matches",
  //   element: <MatchContainer />,
  //   children: [{ index: true, element: <Matches /> }],
  // },
  // Protected Routes
  {
    path: "dashboard",
    element: <AccountLayout />,
    children: [
      
      {
        path: "articles",
        element: <ArticleContainer />,
        children: [{ index: true, element: <Articles /> }],
      },
      // Add the new matches route here
      // {
      //   path: "matches",
      //   element: <MatchContainer />,
      //   children: [{ index: true, element: <Matches /> }],
      // },
    ],
  },
  // Catch-all route for 404
  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },
]);

export default router;
