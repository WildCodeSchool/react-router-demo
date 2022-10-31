import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="w-full p-5 h-12 flex justify-around items-center align-middle shadow-md">
      {navLinks.map((link) => (
        <Link to={link.path}>
          <div className={`${pathname === link.path ? "underline" : ""}`}>
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
