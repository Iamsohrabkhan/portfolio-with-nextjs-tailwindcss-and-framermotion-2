/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumb from "../helpers/breadcrumb";
import { motion } from "framer-motion";

export const Heading = () => {
  return (
    <h2
      className="fixed top-[10%] left-14 -z-40 text-8xl font-black
    uppercase text-yellow-900/80 drop-shadow-2xl font-Mania tracking-wider"
    >
      Blogs
    </h2>
  );
};
export const Background = () => {
  return (
    <>
      <div className="fixed inset-0 -z-30 h-full w-full bg-gradient-to-r from-white/70 to-white/40 bg-fixed" />
      <div className="fixed inset-0 -z-50 h-full w-full bg-blog bg-cover bg-fixed bg-center bg-no-repeat" />
    </>
  );
};

const Articles = ({ blogs }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="parent container absolute top-[15%] left-[10%] mx-auto grid h-full max-w-[80%] grid-cols-1  gap-2 lg:grid-cols-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {blogs.map((curr) => {
        const { slug, title, date, description, img, tags } = curr;
        return (
          <motion.div
            key={slug}
            className="group ml-auto max-w-sm self-end border border-black p-4 transition-all duration-300 hover:bg-black hover:!text-white"
            variants={item}
          >
            <Link href={`blogs/${slug}`} >
              <>
                <img
                  className="h-44 w-[30rem] bg-contain bg-center"
                  src={img}
                  alt={title}
                  // loading="lazy"
                  // layoutId={slug}
                  // initial={{
                  //   opacity:0
                  // }}
                  // animate={{
                  //   opacity:1,
                  //   transition:{
                  //     duration:0.4
                  //   }
                  // }}
                  // exit={{
                  //   opacity:0
                  // }}
                />
                <h2 className="mt-2 text-start text-base font-bold">{title}</h2>
                <p className="text-sm text-black group-hover:!text-white">
                  {description.slice(0, 100)}....
                </p>
                <div className="my-2 h-[1px] w-full bg-gray-500 " />
                <div className="tags text-start">
                  <ul className="flex gap-2">
                    {tags.map((curr) => {
                      return (
                        <li key={curr} className="text-gray-600">
                          #{curr}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="date text-start">{date}</div>
              </>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export const SingleBlog = ({ blog }) => {
  const { back } = useRouter();
  const { img, title, date, description,slug } = blog;
  return (
    <>
      <Breadcrumb first={"Blog"} second={title} />

      <div className="container !mx-auto mt-20 flex h-full w-full  flex-col items-center">
        <img
        // layoutId={slug}
          className="bottom-2 inline-block h-60 w-[30rem] rounded-2xl md:h-80 md:w-[40rem]"
          src={img}
          alt={title}
          // loading="lazy"
          // initial={{
          //   opacity:0
          // }}
          // animate={{
          //   opacity:1,
          //   transition:{
          //     duration:0.4
          //   }
          // }}
          // exit={{
          //   opacity:0
          // }}
        />
        <h2 className="my-5 text-3xl font-bold md:text-5xl">{title}</h2>
        <p className="text-base text-paragraph ">{description}</p>
        <p className="mt-2 self-end">{date}</p>
        <p
          onClick={back}
          className="mb- cursor-pointer self-end text-xl font-semibold underline"
        >
          Back & Read more Blogs
        </p>

        <div className="my-2 h-[1px] w-full bg-black/40 " />
      </div>
    </>
  );
};

export default Articles;
