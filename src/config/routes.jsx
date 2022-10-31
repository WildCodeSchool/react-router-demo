import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Name from "../pages/Name";
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
      {
        path: "/name/:name",
        element: <Name />,
      },
    ],
  },
];

const AppRoutes = () => useRoutes(routeObject);

export default AppRoutes;
