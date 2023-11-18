import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HomeImg from "../images/home.jpg";
import { AiOutlineLine as Line } from "react-icons/ai";

import Links from "../components/Links";
import Button from "../components/Button";
import NavBar from "../components/NavBar"; 
import { BsArrowRightShort as RightArrow } from "react-icons/bs";

import "../styles/home.css";

const Home = () => {
  const iconBtnStyle =
    "absolute w-[50px] h-full text-white rounded-full right-0 top-1/2 -translate-y-1/2 bg-[#7011dd]";

  return (
    <section className="home-section w-full h-screen bg-[#1d1d1d] p-10 flex justify-between items-center gap-10   ">
      <div className="shape w-[400px] h-[120vh] absolute bottom-0 bg-[#7011dd] skew-x-12 -translate-x-1/2 "></div>

      <NavBar />

      <motion.div
        className="img-box w-[400px] h-[95%] rounded-2xl overflow-hidden"
        initial={{
          x: "-50px",
          opacity: 0,
        }}
        animate={{
          x: "0",
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: "2",
        }}
      >
        <img
          src={HomeImg}
          alt="home-img"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="home-text w-[700px] mr-24">
        <motion.div
          className="title w-full flex justify-center mb-6 font-light "
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
          <Line className="text-4xl text-[#7011dd] mr-3" />
          <div className="big-titles text-5xl capitalize ">
            <p className="text-[#7011dd]">i'am yousef mahemoud</p>
            <p className="text-white mt-2">full stack developer</p>
          </div>
        </motion.div>

        <motion.div
          className="info mb-7"
          initial={{
            x: "50px",
            opacity: 0,
          }}
          animate={{
            x: "0",
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: "2",
          }}
        >
          <p className="home-text-p text-xl text-[#969494] font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis sunt officia beatae rem nulla, perferendis omnis iusto
            ullam in ratione voluptas tempore vitae molestias. Recusandae eum a
            eaque eius iusto possimus! Unde incidunt nostrum aut, natus iste
            error mollitia nemo!
          </p>
        </motion.div>
        <Link to="/about">
          <Button
            text="see more"
            icon={<RightArrow className={iconBtnStyle} />}
          />
        </Link>
      </div>

      <Links />
    </section>
  );
};

export default Home;
