/* eslint-disable @next/next/no-img-element */
import PowerButton from "@/components/helpers/PowerButton";
import Logo from "@/components/helpers/logo";
import {
  Card,
  Projectheading,
} from "@/components/pages/project-elements";
import { motion } from "framer-motion";
import Head from "next/head";

const container = {
  hidden: {
    x: "-100vh",
    opacity:0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "linear"
    },
  },
  exit: {
    x: "-100vh",
    opacity:0
  },
};

const Projects = () => {

  return (
    <>
      <Head>
        <title>Sohrab Khan || Projects</title>
      </Head>
      <Logo className="text-white" />
      <PowerButton />
      <Projectheading />

      <motion.main
        className="min-h-screen bg-slate-900"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Card/>
      </motion.main>
      </>
  );
};

export default Projects;
