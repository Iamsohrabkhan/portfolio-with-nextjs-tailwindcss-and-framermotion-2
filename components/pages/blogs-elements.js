/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumb from "../helpers/breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";

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
      <div className="fixed inset-0 -z-30 h-full w-full bg-gradient-to-r from-rose-200/50 to-teal-200/50 bg-fixed" />
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
                />
                <h2 className="mt-2 text-start text-base font-bold">{title}</h2>
                <p className="text-sm text-black group-hover:!text-white">
                  {description.slice(0, 100)}....
                </p>
                <div className="my-2 h-[1px] w-full bg-gray-500 " />
                <div className="tags text-start">
                  <ul className="flex gap-2">
                    {tags.slice(0,2).map((curr) => {
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
  const { img, title, date, description } = blog;
  return (
    <>
    <Head>
    <title>Sohrab Khan || {title}</title>
    </Head>
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex flex-col w-full max-w-3xl mx-auto prose prose-headings:mt-2 prose-headings:mb-4 prose-stone text-left ">
      <div class="w-full mx-auto">
        <img
          className="bottom-2 inline-block h-60 w-[30rem] rounded-2xl md:h-80 md:w-[40rem]"
          src={img}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="text-end font-bold">{date}</p>
        <p
          onClick={back}
          className="mb- cursor-pointer self-end text-xl font-bold text-end underline"
        >
          Back & Read more Blogs
        </p>

        <div className="my-2 h-[1px] w-full bg-black/40 " />
      </div>
      </div>
      </div>
    </>
  );
};

export default Articles;
