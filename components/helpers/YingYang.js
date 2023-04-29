/* eslint-disable @next/next/no-img-element */
import { UseApp } from "@/context/Appcontext";
import { motion } from "framer-motion";

 const YinYang = () => {
    const { click, setClick } = UseApp();
    return (
      <motion.div
        className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center transition-all duration-500 ease-linear ${
          !click ? "top-1/2 left-1/2 " : "top-[95%] left-[90%] "
        }`}
        onClick={() => {
          setClick(!click);
        }}
      >
        <div
          className={`flex cursor-pointer items-center justify-center 
      transition-all duration-300`}
        >
          <img
            className={`animate-spin-slow ${!click ? "h-24 w-24" : "h-16 w-16"}`}
            src="/assets/svg/yin-yang-solid.svg"
            alt="yin-yang"
          />
        </div>
        <button className="animate-pulse text-gray-500 text-base mt-1">{!click && "Click me"}</button>
      </motion.div>
    );
  };
  export default  YinYang