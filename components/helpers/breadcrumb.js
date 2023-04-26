import React from 'react'

const Breadcrumb = ({first,second}) => {
  return (
    <>
    <nav aria-label="breadcrumb">
    <ul className="flex flex-wrap space-x-2 text-sm font-medium relative top-6 left-2">
      <li className="flex items-center space-x-2 ml-0 ">
        <p className="text-gray-800 text-xl">
          {first}
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <svg
          className="h-5 w-5 shrink-0 stroke-black"
          viewBox="0 0 256 256"
          aria-hidden="true"
        >
          <polyline
            points="96 48 176 128 96 208"
            fill="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={24}
          />
        </svg>
        <p  className="text-gray-800 text-xl">
          {second}
        </p>
      </li>
     
    </ul>
  </nav>
  
    </>
  )
}

export default Breadcrumb