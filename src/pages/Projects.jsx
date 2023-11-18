import React from "react";
import { motion } from "framer-motion";
import Links from "../components/Links";
import NavBar from "../components/NavBar"; 
import { ProjectsImgs } from "../assets/Data";

import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects-page w-full h-screen px-24 py-20 bg-[#1d1d1d]">
      
      <NavBar />
      
      <motion.h3
        className="header-title w-full capitalize text-center text-5xl text-white mb-14"
        initial={{
          y: "-50px",
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
        my <span className="text-[#7011dd]">Projects</span>
      </motion.h3>
      <motion.div
        className="imgs-box w-full grid grid-cols-3 gap-6"
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
        {ProjectsImgs.map(({ imgPath }, index) => (
          <motion.div
            className="card relative before:absolute before:w-full before:h-full before:-top-full before:left-0 before:bg-[#7011dd] before:z-10 overflow-hidden before:duration-300 hover:before:top-0"
            initial={{
              opacity: "0",
            }}
            whileInView={{
              opacity: "1",
            }}
            transition={{
              ease: "easeInOut",
              duration: "2",
            }}
          >
            <img
              src={imgPath}
              key={index}
              alt="img"
              className="w-full h-full object-cover"
              initial={{
                y: "-50px",
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
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className="text-[#969494] text-center text-xl w-full mt-7"
        initial={{
          y: "70px",
          opacity: 0,
        }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: "3",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        corporis tempore delectus, soluta temporibus voluptates. corporis
        tempore delectus, soluta temporibus voluptates.
      </motion.p>
      <hr className="w-1/2 text-[#7011dd] relative left-1/2 -translate-x-1/2 mt-10" />
      <Links />
    </section>
  );
};

export default Projects;
