import blogs from '@/components/data/blogs'
import PowerButton from '@/components/helpers/PowerButton'
import { Background, Heading, SingleBlog } from '@/components/pages/blogs-elements'

const Blog = () => {
  return (
    <>
     <PowerButton />
      <div className="relative inset-0 h-screen w-screen">
        <Heading />
        <Background />
        <SingleBlog blogs={blogs}/>
        </div>
    </>
  )
}

export default Blog