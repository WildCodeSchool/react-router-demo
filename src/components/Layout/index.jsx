import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center align-middle">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
