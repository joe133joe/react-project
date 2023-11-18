import React from "react";
import { motion } from "framer-motion";

// import { BsArrowRightShort as RightArrow } from "react-icons/bs";

const Button = ({ text, icon }) => {
  return (
    <motion.div
      className="btn relative w-[200px] h-[50px] rounded-full bg-transparent border-[#7011dd] border-[1px] flex justify-start items-center before:w-full before:h-full before:absolute before:bg-[#7011dd] before:left-full hover:before:left-0 before:duration-300 cursor-pointer overflow-hidden"
      initial={{
        y: "50px",
        opacity: 0,
      }}
      animate={{
        y: "0",
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: "2",
      }}
    >
      <p className="text-xl absolute text-white capitalize ml-10">{text}</p>
      {icon}
    </motion.div>
  );
};

export default Button;
