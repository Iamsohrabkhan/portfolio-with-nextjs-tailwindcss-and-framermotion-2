/* eslint-disable @next/next/no-img-element */
import { motion as m} from "framer-motion"
import React, { useState, useEffect } from 'react';
const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // call handleResize initially to set the correct state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <m.div className='w-[80vw] flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat   z-50 h-[40vh]'
    initial={{height:0}}
    animate={{height: isMobile ? "30vh" :"50vh"}}
    transition={{type:"spring",duration:2,delay:1}}
    >
            <div className="w-1/2 relative flex  justify-center items-center border-2 border-r-0  border-white ">
                <div>
                <h2 className='text-xl sm:text-2xl md:text-4xl text-white font-bold'>Hi,</h2>
                <h3 className='text-base sm:text-lg md:text-xl text-white font-semibold '>I am Sohrab Khan</h3>
                <p className='text-sm md:text-base lg:text-lg text-gray-500 '>I speaclize in creating  stunning</p>
                <p className=' text-sm md:text-base lg:text-lg text-gray-500 '>websites that are experty coded,</p>
                <p className=' text-sm md:text-base lg:text-lg text-gray-500 '>skillfully animated.</p>
                </div>
            </div>
            <div className="w-1/2 relative flex border-2 border-l-0  border-black"        
            >
            <m.img src="/assets/Images/profile-img.png" alt="" className="img absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 w-64 md:w-96 h-auto"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1,delay:2}}
             /> 
            </div>
    </m.div>
  )
}

export default Intro