import { UseApp } from '@/context/Appcontext'

const Logo = ({className}) => {
  return (
    <div className="fixed top-1 left-10 z-50 flex gap-5">
          <div
            className={`logo text-3xl font-bold italic ${className}`}
          >
            Sk
          </div>
          <div
            className={`music my-auto ${className}`}
          >
            Music
          </div>
        </div>
  )
}

export default Logo