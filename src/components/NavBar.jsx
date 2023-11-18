import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { PagesLinks } from "../assets/Data";

import { HiMiniBars3BottomRight as BarsMenu } from "react-icons/hi2";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="nav-bar">
      <div className="md:hidden block">
        <BarsMenu
          className="fixed z-[50] cursor-pointer w-12 h-12 right-6 top-6 bg-blue-400 text-4xl text-[white] border-[1px] border-[#7011dd]"
          onClick={() => setToggle(true)}
        />
      </div>
      <div
        className={` ${
          toggle
            ? `layer showed z-50 w-full fixed h-screen bg-red-400 left-0 top-0 duration-1000 flex justify-center items-center`
            : `layer z-50 w-full fixed h-screen bg-red-400 -left-full top-0 duration-1000 flex justify-center items-center`
        }`}
      >
        <div className="absolute right-6 top-6 w-12 h-auto bg-blue-400 flex justify-center items-center">
          <CloseIcon className="cursor-pointer text-white text-4xl" onClick={() => setToggle(false)} />
        </div>
        <div className="square w-auto h-auto flex flex-col gap-6 justify-between items-start bg-green-400">
          {PagesLinks.map(({ path, icon, title }, index) => (
            <div className="bg-yellow-400 relative before:w-full before:h-[2px] before:top-full before:-left-full before:bg-black hover:before:left-0 before:duration-300">
              <NavLink to={path} key={index} className="flex gap-2 text-4xl text-[white]" onClick={() => setToggle(false)}>
                <p>{icon}</p>
                <p>{title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
