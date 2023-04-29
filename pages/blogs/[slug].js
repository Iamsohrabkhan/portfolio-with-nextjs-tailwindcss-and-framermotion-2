import PowerButton from '@/components/helpers/PowerButton'
import { Background, Heading, SingleBlog } from '@/components/pages/blogs-elements'




const Blog = ({blog}) => {
  return (
    <>
    
     <PowerButton />
      <div className="relative inset-0 h-screen w-screen">
        <Heading />
        <Background />
        <SingleBlog blog={blog}/>
        </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3500/portfolioblogs');
  const posts = await res.json();
  const slugs = posts.map((curr) => {
    return curr.slug;
  });
  return {
    paths: slugs.map((curr)=>({ params: {slug: curr}}) ),
    fallback: false, // can also be true or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3500/portfolioblogs?slug=${slug}`);
  const [blog] = await res.json();
  return {
    props: {
      blog,
    },
  };
}
export default Blog