import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Links from "../components/Links";
import Button from "../components/Button";
import NavBar from "../components/NavBar"; 

import { InformationOne } from "../assets/Data";
import { InformationTwo } from "../assets/Data";
import { Boxes } from "../assets/Data";

import { AiOutlineLine as Line } from "react-icons/ai";
import { BsArrowRightShort as RightArrow } from "react-icons/bs";

import "../styles/about.css";

const About = () => {
  const [para] = useTypewriter({
    words: ["See my Projects !"],
    loop: {},
  });

  return (
    <section className="about-section w-full h-screen bg-[#1d1d1d] px-24 py-20">
      
      <NavBar />
      
      <motion.h3
        className="header-title w-full text-center text-5xl text-white mb-20"
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
        About <span className="text-[#7011dd]">Me</span>
      </motion.h3>

      <motion.h4
        className="personal-information text-2xl font-normal text-white mb-3"
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
        Personal Information
      </motion.h4>

      <div className="info w-full grid grid-col-3 grid-flow-col">
        <motion.div
          className="flex flex-col justify-center gap-6 text-xl font-light text-[#7011dd]"
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
          {InformationOne.map(({ firstName, age, phone, country }, index) => (
            <>
              <p key={index}>
                {`FirstName:  `}
                <span className="text-[#969494]">{firstName}</span>
              </p>
              <p key={index}>
                {`Age:  `}
                <span className="text-[#969494]">{age}</span>
              </p>
              <p key={index}>
                {`Phone:  `}
                <span className="text-[#969494]">{phone}</span>
              </p>
              <p key={index}>
                {`Country:  `}
                <span className="text-[#969494]">{country}</span>
              </p>
            </>
          ))}
        </motion.div>

        <motion.div
          className="box-about-info flex flex-col justify-center gap-6 text-xl font-light text-[#7011dd]"
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
          <div className="about-info flex justify-center flex-col gap-6">
            {InformationTwo.map(
              ({ lastName, job, languages, freeLance }, index) => (
                <>
                  <p key={index}>
                    {`LasName:  `}
                    <span className="text-[#969494]">{lastName}</span>
                  </p>
                  <p key={index}>
                    {`Job:  `}
                    <span className="text-[#969494]">{job}</span>
                  </p>
                  <p key={index}>
                    {`Languages:  `}
                    <span className="text-[#969494]">{languages}</span>
                  </p>
                  <p key={index}>
                    {`FreeLance:  `}
                    <span className="text-[#969494]">{freeLance}</span>
                  </p>
                </>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          className="boxes  grid grid-cols-2 gap-3"
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
          {Boxes.map(({ boxNum, smallText }, index) => (
            <div className="w-full pl-4 py-10 text-xl text-[#969494] border-[1px] border-[#7011dd] rounded-lg hover:bg-[#7011dd] hover:text-white duration-300">
              <p className="text-4xl" key={index}>
                {boxNum}
              </p>
              <div className="w-full flex gap-1">
                <Line className="mt-1" />
                <p key={index}>{smallText}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Link to="/projects">
        <Button
          text="See more"
          icon={
            <RightArrow className="absolute w-[50px] h-full text-white rounded-full right-0 top-1/2 -translate-y-1/2 bg-[#7011dd]" />
          }
        />
      </Link>
      <p className="more-coming text-center text-[#969494] text-xl">
        {para}
        <span>
          <Cursor cursorColor="#7011dd" />
        </span>
      </p>
      <Links />
    </section>
  );
};

export default About;
