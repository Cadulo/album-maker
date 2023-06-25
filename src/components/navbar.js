import { useState, useEffect } from "react";
import Switcher from "./Switcher";

const Navbar = () => {

  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold  dark:text-white">Album Maker</h1>
          <Switcher></Switcher>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;