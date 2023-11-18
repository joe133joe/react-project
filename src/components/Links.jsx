import React from "react";

import { PagesLinks } from "../assets/Data";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Links = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="max-md:hidden fixed top-1/2 -translate-y-1/2 right-[20px] w-[80px] h-[200px] flex flex-col justify-center gap-4 items-center">
      {PagesLinks.map(({ path, icon }, index) => (
        <div className="w-full h-full  flex justify-center items-center gap-4">
          <NavLink
            to={path}
            key={index}
            className={`${isActive === false ? `p-3 text-2xl flex text-white justify-center items-center rounded-full bg-[#272626] duration-300` : `p-3 text-2xl flex justify-center items-center rounded-full bg-[#272626] duration-300` } `}
            onClick={() => setIsActive(!isActive)}
          >
            {icon}
          </NavLink>
        </div>
      ))}
      {/* <p>hello man</p> */}
    </div>
  );
};

export default Links;