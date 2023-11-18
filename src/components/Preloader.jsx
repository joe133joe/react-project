import React from "react";
import { HashLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <HashLoader
        color="#7011dd"
        size={100}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Preloader;
