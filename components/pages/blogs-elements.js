/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {  useRouter } from "next/router";import Breadcrumb from "../helpers/breadcrumb";
useRouter
export const Heading = () => {
  return (
    <h2
      className="fixed top-[10%] left-14 -z-40 text-8xl font-black
    uppercase text-yellow-900/80 drop-shadow-2xl"
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
 
  return (
    <div className="parent container absolute top-[15%] left-[10%] mx-auto grid h-full max-w-[80%]  grid-cols-2 gap-2">
      {blogs.map((curr) => {
        const { slug, title, date, description, img, tags } = curr;
        return (
          <div
            key={slug}
            className="group ml-auto w-[80%] self-end border border-black p-4 transition-all duration-300 hover:bg-black hover:!text-white"
          >
            <Link href={`blogs/${slug}`}>
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
          </div>
        );
      })}
    </div>
  );
};

export const SingleBlog = ({blogs}) => {
  const useSlug=useRouter().query.slug
  const {back}=useRouter()
  const blog=blogs.find(post=>post.slug===useSlug)

  const {img,title,date,description}=blog
  return (
    <>
      <Breadcrumb first={"Blog"} second={title}/>
      <div className="container !mx-auto mt-20 flex h-full w-full  flex-col items-center">
        <img
          className="bottom-2 inline-block h-60 w-[30rem] md:h-80 md:w-[40rem] rounded-2xl"
          src={img}
          alt={title}
        />
        <h2 className="my-5 text-3xl md:text-5xl font-bold">
          {title}
        </h2>
        <p className="text-base text-paragraph ">
        {description}
        </p>
        <p className="mt-2 self-end">{date}</p>
        <p onClick={back} className="self-end mb- text-xl font-semibold underline cursor-pointer">Back & Read more Blogs</p>

        <div className="my-2 h-[1px] w-full bg-black/40 " />
      </div>
    </>
  );
};

export default Articles;
