/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0, scale: 0 },
  visible: {
    delay:0.3,
    x: 0,
    scale: 1,
    opacity: 1,
  },
};

export const Card = () => {
  return (
    <>
    <div className="h-16 md:h-32" />
    <div className="mx-auto max-w-screen-lg px-3">
      <motion.div
        className="flex flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.div
          className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
          variants={item}
        >
          <div className="shrink-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://healthandwealthblogs.netlify.app/"
            >
              <img
                className="h-36 w-36 hover:translate-y-1"
                src="/assets/Images/project-fire.png"
                alt="Project Web Design"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                <div className="text-xl font-semibold">Self Care</div>
              </a>
              <div className="ml-3 flex gap-2">
                <div className="rounded-md bg-fuchsia-400 px-2 py-1 text-xs font-semibold text-fuchsia-900">
                  Nextjs
                </div>
                <div className="rounded-md bg-lime-400 px-2 py-1 text-xs font-semibold text-lime-900">
                  Framer-motion
                </div>
                <div className="rounded-md bg-sky-400 px-2 py-1 text-xs font-semibold text-sky-900">
                  Tailwind.css
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              WeCare is a health and wealthness that connects users with health
              care professionals, informative resorces. Desogned by Mext js,
              Sanity and Framer Motion.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
          variants={item}
        >
          <div className="shrink-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://portfolio-iamsohrabkhan.vercel.app"
            >
              <img
                className="h-36 w-36 hover:translate-y-1"
                src="/assets/Images/project-fire.png"
                alt="Project Web Design"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                <div className="text-xl font-semibold">Portofolio</div>
              </a>
              <div className="ml-3 flex gap-2">
                <div className="rounded-md bg-fuchsia-400 px-2 py-1 text-xs font-semibold text-fuchsia-900">
                  Nextjs
                </div>
                <div className="rounded-md bg-sky-400 px-2 py-1 text-xs font-semibold text-sky-900">
                  Tailwind.css
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              This site was design initially. This shows my skills while
              learning next.js and tailwind css.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
          variants={item}
        >
          <div className="shrink-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/iamsohrabkhan/wordcounter"
            >
              <img
                className="h-36 w-36 hover:translate-y-1"
                src="/assets/Images/project-2.png"
                alt="Project Web Design"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center gap-y-2 md:flex-row">
              <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                <div className="text-xl font-semibold">Word Counter</div>
              </a>
              <div className="ml-3 flex gap-2">
                <div className="rounded-md bg-fuchsia-400 px-2 py-1 text-xs font-semibold text-fuchsia-900">
                  React
                </div>
                <div className="rounded-md bg-sky-400 px-2 py-1 text-xs font-semibold text-sky-900">
                  Bootstrap
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              My word counter websites, built with react, allow users to quickly
              and easuky count tge number of words in your text. This website is
              design being fast and reliable.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </>

  );
};

export const Spaceman = () => {
  return (
    <motion.div
      className="lg:h-50 absolute h-32 w-32 lg:w-52"
      initial={{
        top: "50rem",
        right: "-50rem",
      }}
      animate={{
        top: 0,
        right: "9rem",
        transition: {
          type: "spring",
          delay: 0.8,
          duration: 3,
        },
      }}
    >
      <img src="/assets/Images/spaceman.png" alt="" />
    </motion.div>
  );
};

export const Projectheading = () => {
  return (
    <h2
      className="fixed top-[10%] left-14 -z-30 font-Mania text-8xl
      font-black uppercase tracking-wider text-white opacity-40 drop-shadow-2xl selection:bg-transparent"
    >
      Projects
    </h2>
  );
};
