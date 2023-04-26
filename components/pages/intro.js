/* eslint-disable @next/next/no-img-element */
import { motion as m} from "framer-motion"

const Intro = () => {
  return (
    <m.div className='w-[65vw] flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-no-repeat custom-gradien   z-50 h-[40vh]'
    initial={{height:0}}
    animate={{height:"50vh"}}
    transition={{type:"spring",duration:2,delay:1}}
    >
            <div className="w-1/2 relative flex flex-col justify-center items-center border-4 border-r-0  border-white border-dotted">
                <div>

                <h2 className='text-4xl text-white font-bold'>Hi,</h2>
                <h3 className='text-xl text-white font-semibold '>I am Sohrab Khan</h3>
                <p className='text-lg text-gray-500 '>I design and code simple </p>
                <p className='text-lg text-gray-500 '> yet beutiful Websites. </p>
                </div>
            </div>
            <div className="w-1/2 relative flex border-4 border-l-0 border-dotted border-black"        
            >
            <m.img src="/assets/Images/profile-img.png" alt="" className="img absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 w-96 h-auto"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1,delay:2}}
             /> 
            </div>
    </m.div>
  )
}

export default Intro