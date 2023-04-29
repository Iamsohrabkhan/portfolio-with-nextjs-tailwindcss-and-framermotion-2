/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import React, { useState, useEffect } from "react";
const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call handleResize initially to set the correct state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <m.div
      className="absolute top-1/2 left-1/2 z-50 flex h-[40vh] w-[80vw] -translate-x-1/2   -translate-y-1/2 bg-no-repeat"
      initial={{ height: 0 }}
      animate={{ height: isMobile ? "30vh" : "50vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <div
        className="relative pl-5  flex w-1/2 items-center justify-center border-2 border-r-0  border-white
             "
      >
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-4xl">
            Hi,
          </h2>
          <h3 className="text-sm font-semibold text-white sm:text-lg md:text-xl mb-1">
            I am Sohrab Khan
          </h3>
          <p className="text-xs text-gray-500 md:text-base lg:text-lg ">
            I speaclize in creating stunning
          </p>
          <p className=" text-xs text-gray-500 md:text-base lg:text-lg ">
            websites that are experty coded &
          </p>
          <p className=" text-xs text-gray-500 md:text-base lg:text-lg ">
            skillfully animated.
          </p>
        </div>
      </div>
      <div className="relative flex w-1/2 border-2 border-l-0  border-black">
        <m.img
          src="/assets/Images/profile-img.png"
          alt=""
          className="img absolute bottom-0 left-1/2 h-auto w-96 -translate-x-1/2 translate-y-0 md:w-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </m.div>
  );
};

export default Intro;
