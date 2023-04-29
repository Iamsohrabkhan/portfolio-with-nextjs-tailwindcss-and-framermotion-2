import { UseApp } from "@/context/Appcontext";
import { motion } from "framer-motion";
import Link from "next/link";

export const Sayhi = ({ className }) => {
  return (
    <div className="fixed  top-1 right-10 z-50 translate-y-1/2 cursor-pointer text-xl font-semibold hover:scale-150">
      <Link href="mailto:7ohrabkhan@gmail.com" className={className}>
        Say hi
      </Link>
    </div>
  );
};
export const Projects = () => {
  const { click } = UseApp();
  return (
    <motion.div
      className="fixed top-1/4 left-0 z-50 -translate-y-1/2 rotate-90 cursor-pointer text-base font-semibold md:top-1/2  md:left-10"
      initial={{ x: -200, rotate: 90 }}
      animate={{ x: 0, transition: { duration: 0.2, type: "spring" } }}
      whileHover={{ scale: 1.5 }}
    >
      <Link href="projects" className={!click ? "text-black" : "text-white"}>
        Projects.
      </Link>
    </motion.div>
  );
};
export const Blogs = () => {
  return (
    <motion.div
      className="fixed top-1/2 -right-1 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer text-base font-semibold  md:right-4"
      initial={{ x: 200, rotate: 90 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      whileHover={{ scale: 1.5 }}
    >
      <Link href="blogs">Blogs.</Link>
    </motion.div>
  );
};
export const Skills = () => {
  return (
    <motion.div
      className="fixed right-1/4 bottom-8 translate-x-1/2 translate-y-1/2 cursor-pointer text-base  font-semibold"
      initial={{ y: 200 }}
      whileHover={{ scale: 1.5 }}
      animate={{ y: 20 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <Link href="skills">Skills.</Link>
    </motion.div>
  );
};
export const About = () => {
  const { click } = UseApp();
  return (
    <motion.div
      className={`fixed  left-1/4 bottom-8 z-50 translate-x-1/2 translate-y-1/2 cursor-pointer text-base  font-semibold ${
        !click ? "text-black" : "text-white"
      }`}
      initial={{ y: 200 }}
      whileHover={{ scale: 1.5 }}
      animate={{ y: 20 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <Link href="about">About.</Link>
    </motion.div>
  );
};
