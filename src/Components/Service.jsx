/** @format */

import { IoLogoFreebsdDevil } from "react-icons/io";
import { IoLogoDesignernews } from "react-icons/io";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoOctocat } from "react-icons/io";
import { IoLogoYen } from "react-icons/io";
import { IoLogoLaravel } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { FaOctopusDeploy } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/Animation";

const Service = () => {
  return (
    <div id="service" className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl text-gray-800 my-2"
        >
          Our Clients
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-500 my-2"
        >
          We have been working with some Fortune 500+ clients
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-between w-full my-8"
        >
          <IoLogoClosedCaptioning className="text-5xl text-gray-800" />
          <IoLogoFreebsdDevil className="text-5xl text-gray-800" />
          <IoLogoDesignernews className="text-5xl text-gray-800" />
          <IoLogoCodepen className="text-5xl text-gray-800" />
          <IoLogoOctocat className="text-5xl text-gray-800" />
          <IoLogoYen className="text-5xl text-gray-800" />
          <IoLogoLaravel className="text-5xl text-gray-800" />
        </motion.div>
        <motion.h1
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl text-gray-800 text-center my-2"
        >
          Manage your entire community in a <br />
          <span className="text-4xl text-gray-800 my-2 text-center block">
            single system
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-500"
        >
          We have been working with some Fortune 500+ clients
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        <div className="relative border border-gray-200 py-10 px-4 text-center flex flex-col items-center justify-center hover:transform hover:-translate-y-[14px] transition-all duration-300 ease-in-out">
          <div className="anim flex items-center justify-center flex-col">
            <IoIosPeople className="text-[45px] py-2 text-center" />
            <h2 className="text-[25px] font-normal py-2">
              Membership Organisations
            </h2>
            <p className="text-gray-500 font-normal">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        <div className="relative border border-gray-200 py-10 px-4 text-center flex flex-col items-center justify-center hover:transform hover:-translate-y-[14px] transition-all duration-300 ease-in-out">
          <div className="anim flex items-center justify-center flex-col">
            <FaCodepen className="text-[45px] py-2 text-center" />
            <h2 className="text-[25px] font-normal py-2">
              Membership Organisations
            </h2>
            <p className="text-gray-500 font-normal">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
        <div className="relative border border-gray-200 py-10 px-4 text-center flex flex-col items-center justify-center hover:transform hover:-translate-y-[14px] transition-all duration-300 ease-in-out">
          <div className="anim flex items-center justify-center flex-col">
            <FaOctopusDeploy className="text-[45px] py-2 text-center" />
            <h2 className="text-[25px] font-normal py-2">
              Membership Organisations
            </h2>
            <p className="text-gray-500 font-normal">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
