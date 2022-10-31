import React from "react";
import { Link } from "react-router-dom";

const nameList = ["Julien", "Nico", "Romain", "Sébastien", "Thomas"];

function Sidebar() {
  return (
    <div className="flex shadow-md p-5 flex-col space-y-2 items-center justify-center align-middle">
      {nameList.map((name) => (
        <Link to={`/name/${name}`}>{name}</Link>
      ))}
    </div>
  );
}

export default Sidebar;
