import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";


import Links from "../components/Links";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

import { ContactIcons } from "../assets/Data";
import { Social } from "../assets/Data";
import { IoIosSend as SendIcon } from "react-icons/io";

import "../styles/contact.css";

const Contact = () => {

  const [text] = useTypewriter({
    words: ["thanks for visiting my website, good luck !"],
    loop: {},
    delaySpeed: 3000,
    deleteSpeed: 30,
  });

  const timeNow = new Date();
  const Years = timeNow.getFullYear();

  const iconBtnStyleSend =
    "absolute w-[50px] h-full p-2 text-3xl text-white rounded-full right-0 top-1/2 -translate-y-1/2 bg-[#7011dd]";

  return (
    <section className="contact-page w-full h-screen bg-[#1d1d1d] px-24 py-20">
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
        Keep In <span className="text-[#7011dd]">touch</span>
      </motion.h3>

      <div className="big-box w-full flex justify-between gap-2">
        <div className="w-full">
          <motion.h4
            className="text-2xl text-white"
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
            Don't be Shy !
          </motion.h4>
          <motion.p
            className="contact-text w-auto h-auto mt-6 text-[#969494]"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vero error praesentium quis voluptate vel, nesciunt porro nam ipsum
            optio nemo minus corporis tenetur sed quo soluta assumenda, modi
            hic?
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col gap-4"
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
            {ContactIcons.map(({ icon, titleOne, titleTwo }, index) => (
              <div className="flex gap-2 text-white">
                <p className="p-4 text-xl rounded-full text-[#7011dd] bg-[#272626] hover:text-white hover:bg-[#7011dd] duration-300">
                  {icon}
                </p>
                <div>
                  <p>{titleOne}</p>
                  <p>{titleTwo}</p>
                </div>
              </div>
            ))}
            <div className="social-links w-3/4 mt-2 flex gap-5">
              {Social.map(({ icon, where, infoToWhere }, index) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={where}
                  key={index}
                  className="text-2xl rounded-full text-[#7011dd] hover:text-white duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="inputs-textarea-box w-full flex flex-col gap-4"
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
          <div className="inputs-box w-full flex justify-between gap-2">
            <input
              type="text"
              id="fullName"
              required
              className="rounded-full py-2 px-5"
              placeholder="Your Name"
            />
            <input
              type="email"
              id="email_id"
              required
              className="rounded-full py-2 px-5"
              placeholder="Your Email"
            />
            <input
              type="text"
              required
              className="rounded-full py-2 px-5"
              placeholder="Your Subject"
            />
          </div>
          <div>
            <textarea
              name=""
              id="message"
              required
              cols="30"
              rows="10"
              className="w-full rounded-3xl px-3 py-3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button
            text="send me"
            icon={
              <SendIcon
                className={iconBtnStyleSend}
                />
              }
          />
        </motion.div>
      </div>
      <div></div>
      <p className="final w-full text-center text-3xl font-light mt-20 capitalize text-[#969494]">
        {text}
        <span>
          <Cursor cursorColor="#7011dd" />
        </span>
        <motion.p
          className="rights text-xl mt-6"
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
        >{`All Rights reserved ${Years} || made by Youssef `}</motion.p>
      </p>
      <Links />
    </section>
  );
};

export default Contact;
