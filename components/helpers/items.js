import { UseApp } from "@/context/Appcontext"
import { motion } from "framer-motion"
import Link from "next/link"

export const Sayhi = ({className}) => {
  return (
    <motion.div className="fixed hover:scale-150 transition-all duration-300 top-1 right-10 z-50 translate-y-1/2 cursor-pointer font-semibold text-base">
   <Link href="mailto:7ohrabkhan@gmail.com" className={className}> Say hi</Link>
  </motion.div>
  )
}
export const Projects = () => {
  const {click}=UseApp()
  return (
    <motion.div className="fixed hover:scale-150 transition-all duration-300 top-1/2 left-10 z-50 -translate-y-1/2 rotate-90 cursor-pointer font-semibold text-base">
    <Link href="projects" className={!click ? "text-black" : "text-white"}>
      Projects.
    </Link>
  </motion.div>
  )
}
export const Blogs = () => {
  return (
    <div className="fixed hover:scale-150 transition-all duration-300 top-1/2 right-4 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer font-semibold text-base"  
    >
    <Link href="blogs">Blogs.</Link>
  </div>
  )
}
export const Skills = () => {
  return (
    <motion.div className="fixed hover:scale-150 transition-all duration-300 bottom-8 left-1/2 translate-x-1/2 translate-y-1/2 cursor-pointer font-semibold text-base">
    <Link href="skills">Skills.</Link>
  </motion.div>
  )
}
export const About = () => {
  const {click,setClick}=UseApp()
  return (
    <motion.div className={`fixed hover:scale-150 transition-all duration-300 bottom-8 left-1/4 translate-x-1/2 translate-y-1/2 cursor-pointer font-semibold text-base z-50 ${!click ? "text-black" : "text-white"}`}>
    <Link href="about" onClick={()=>{setClick(true)}}>About.</Link>
  </motion.div>
  )
}
