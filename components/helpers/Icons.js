import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitterAlt } from "react-icons/tfi";
import { ImFacebook } from "react-icons/im";
import { motion } from "framer-motion";
import { UseApp } from "@/context/Appcontext";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      type:"spring",
      duration:0.5,
    },
  },
};
const item = {
  hidden: { y: 5, opacity: 0, scale:0 },
  visible: {
    y: 0,
    opacity: 1,
    scale:[0,1.4,1.8,2,2,1.4],
    // transition:{
      
    // }
  },

};
const Icons = ({className}) => {
  return (
    <motion.div className="icons translate--1/2 fixed bottom-1 left-3 md:left-11  z-50 translate-x-1/2 ">
      <motion.ul
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${className}`}
          variants={item}
        >
          <a href="https://twitter.com/7ohrabkhan" target="_blank" rel="noreferrer">
          <TfiTwitterAlt className="hover:scale-150 hover:text-purple-400 transition-all duration-200" />
          </a>
        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${className}`}
          variants={item}
        >     
          <a href="https://github.com/iamsohrabkhan" target="_blank" rel="noreferrer">
          <AiFillGithub className="hover:scale-150 hover:text-purple-400 transition-all duration-200" />
          </a>

        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${className}`}
          variants={item}
        >
          <a href="https://facebook.com/7ohrabkhan" target="_blank" rel="noreferrer">
          <ImFacebook className="hover:scale-150 hover:text-purple-400 transition-all duration-200" />
          </a>
        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 ${className}`}
          variants={item}
        >
          <a href="https://instagram.com/imsohrabkhan_" target="_blank" rel="noreferrer">
          <AiOutlineInstagram className="hover:scale-150 hover:text-purple-400 transition-all duration-200" />
          </a>
        </motion.li>
        <motion.li
          className={`ml-2 mt-0.5 h-24 w-0.5 ${
            className==="text-white" ? "bg-white": "bg-black"
          }`}
          initial={{height:0}}
          animate={{height:"6rem",
        transition:{
          duration:0.2
        }
        }}
        />
      </motion.ul>
    </motion.div>
  );
};
export default Icons;
