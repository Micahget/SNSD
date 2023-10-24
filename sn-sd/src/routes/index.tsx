import { createBrowserRouter, Navigate } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
// import ProtectedRoute from "./ProtectedRoute";
import AccountLayout from "../layout/dashboard";
import ArticleContainer from "../pages/articles/ArticleContainer";
import Articles from "../pages/articles";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard/articles" replace /> },
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
  // Protected Routes
  {
    path: "dashboard",
    element: (
      //   <ProtectedRoute>
      <AccountLayout />
      //   </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard/articles" replace /> },

      {
        path: "articles",
        element: <ArticleContainer />,
        children: [{ index: true, element: <Articles /> }],
      },
    ],

    //     children: [
    //       { index: true, element: <Projects /> },
    //       {
    //         path: ":projectID",
    //         element: <ProjectDetails />,
    //         children: [
    //           { index: true, element: <></> },
    //           {
    //             path: "tasks",
    //             children: [
    //               { index: true, element: <Navigate to="../" /> },
    //               {
    //                 path: "new",
    //                 element: <NewTask />,
    //               },
    //               {
    //                 path: ":taskID",
    //                 children: [
    //                   { index: true, element: <TaskDetailsContainer /> },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     path: "members",
    //     element: <Members />,
    //   },
    // ],
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },
]);

export default router;
