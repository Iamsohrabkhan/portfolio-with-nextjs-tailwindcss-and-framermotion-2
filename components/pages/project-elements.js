/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

export const Card = ({
  title,
  description,
  tag1,
  tag2,
  tag3,
  sitelink,
  github,
  delay,
}) => {
  return (
    <motion.div
      className="card mr group mx-auto  flex h-[44vh] w-64 cursor-pointer flex-col  rounded-tr-2xl rounded-br-2xl border-[1px] border-white bg-white px-4 py-2 transition-all duration-200 ease-linear hover:bg-black"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: delay }}
    >
      <h2 className="text-xl font-bold group-hover:text-white">{title}</h2>
      <p className="my-3 text-sm group-hover:text-white">{description} </p>

      <div className="h-[1px] w-full bg-black group-hover:text-white" />
      <ul className="tags flex flex-wrap space-x-4 group-hover:text-white">
        <li>#{tag1}</li>
        <li>#{tag2}</li>
        <li>{tag3 && tag3}</li>
      </ul>
      <div className="mt-3 flex max-w-[70%] justify-between group-hover:text-white">
        <Link
          href={sitelink}
          target="_blank"
          className="btn rounded-bl-[50px] bg-black px-6 py-1 text-white group-hover:bg-white group-hover:text-black cursor-pointer"
        >
          Visit
        </Link>
        <Link className="cursor-pointer" href={github} target="_blank">
          <FaGithub className="self-center text-2xl" />
        </Link>
      </div>
    </motion.div>
  );
};

export const ProYang = () => {
  const yangRef = useRef(null);
  return (
    <div className="fixed bottom-4 right-4 z-10 block h-20 w-20 text-white">
      <img
        className="invert-img h-14 w-14 text-white"
        src="/assets/svg/yin-yang-solid.svg"
        alt="yin-yang"
        ref={yangRef}
      />
    </div>
  );
};

export const Spaceman=()=>{
  return <motion.div className="absolute w-32 h-32 lg:w-52 lg:h-50"
  initial={{
    top:"50rem",
    right:"-50rem"
  }}
  animate={{
    top:0,
    right:"9rem",
    transition:{
      type:"spring",
      delay:0.8,
      duration:3
    }
  }}
  >
        <img src="/assets/Images/spaceman.png" alt="" />
    
    </motion.div>
}

export const Projectheading = () => {
  return (
    <h2
      className="fixed top-[10%] left-14 -z-40 text-8xl font-black
      uppercase tracking-wider text-stone-300 opacity-40 drop-shadow-2xl selection:bg-transparent font-Mania"
    >
      Projects
    </h2>
  );
};