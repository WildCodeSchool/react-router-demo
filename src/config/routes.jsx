import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Profile from "../pages/Profile";

/** @type {import("react-router-dom").RouteObject} */
const routeObject = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/pokemon",
        element: <Pokemon />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

const AppRoutes = () => useRoutes(routeObject);

export default AppRoutes;
