import { useRef, useState } from 'react'
import { FaMusic, FaSadCry, FaStop } from 'react-icons/fa'
import { ImMusic } from 'react-icons/im'
// import {music} from "/assets/audio/u-said-it-v13-1167.mp3"

const Logo = ({className}) => {
  const ref=useRef(null)
  const [click, setClick] = useState(false)
  const handleClick=()=>{
    setClick(!click)
    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  return (
    <div className="fixed top-3 left-3 md:left-10 z-50 flex gap-10">
          <div
            className={`logo text-5xl font-bold italic font-Mania ${className}`}
          >
            Sk
          </div>
          <div
            className={`music my-auto cursor-pointer ${className}`}
            onClick={()=>{handleClick()}}
          >
          <ImMusic className={`text-2xl  self-center align-middle  ${click? "text-green-400": "text-red-400"}`}/>
            <audio src={"/assets/audio/u-said-it-v13-1167.mp3"} ref={ref} loop />
          </div>
        </div>
  )
}



export default Logo