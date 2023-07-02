import { useState, useEffect } from "react";
import Switcher from "./Switcher";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  console.log(user)
  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2  py-4">
          <h1 className="text-xl font-bold  dark:text-white">Album Maker</h1>
          <div className="flex gap-4 justify-end">
            {isAuthenticated && (<div className="flex gap-4"> <h2 className="text-xl font-bold  dark:text-white">Bienvenido {user.username}!</h2>
              <Link to={"/"} onClick={() => {logout()}} className="text-xl font-bold  dark:text-white"> Log out</Link></div>)}
            <Switcher></Switcher>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;