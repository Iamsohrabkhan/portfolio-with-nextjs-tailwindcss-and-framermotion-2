import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitterAlt } from "react-icons/tfi";
import { ImFacebook } from "react-icons/im";
import { motion } from "framer-motion";
import { UseApp } from "@/context/Appcontext";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      duration:2
    },
  },
};
const item = {
  hidden: { y: 5, opacity: 0, scale:1.3 },
  visible: {
    y: 0,
    opacity: 1,
    transition:1
  },

};
const Icons = ({className}) => {
  const { click } = UseApp();

  return (
    <motion.div className="icons translate--1/2 fixed bottom-1 left-10 z-50 translate-x-1/2 ">
      <motion.ul
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-150 ${className}`}
          variants={item}
          whileHover={{
            scale:2,
            transition:{
              duration:.2,
              type:"spring"
            }
          }}
        >
          <TfiTwitterAlt />
        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-150 ${className}`}
          variants={item}
          whileHover={{
            scale:2,
            transition:{
              duration:.2,
              type:"spring"
            }
          }}
        >        
          <AiFillGithub />
        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-150 ${className}`}
          variants={item}
          whileHover={{
            scale:2,
            transition:{
              duration:.2,
              type:"spring"
            }
          }}
        >
          <ImFacebook />
        </motion.li>
        <motion.li
          className={`cursor-pointer text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-150 ${className}`}
          variants={item}
          whileHover={{
            scale:2,
            transition:{
              duration:.2,
              type:"spring"
            }
          }}
        >
          <AiOutlineInstagram />
        </motion.li>
        <li
          className={`ml-2 mt-0.5 h-24 w-0.5 ${
            className==="text-white" ? "bg-white": "bg-black"
          }`}
        />
      </motion.ul>
    </motion.div>
  );
};
export default Icons;
