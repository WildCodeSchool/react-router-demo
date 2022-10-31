import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center align-middle">
      <Navbar />
      <div className="w-full p-0 sm:p-5 md:p-10 flex justify-between items-start align-middle">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
