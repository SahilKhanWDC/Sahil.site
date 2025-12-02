import React from 'react'

const Footer = () => {
  return (
    <div>
        <hr className="h-[2px] w-full bg-gradient-to-r from-black via-violet-700 to-black border-0 rounded-full" />

      <div className="heading py-8 px-1 text-center">
        <h1 className="md:text-lg lg:text-xl text-xs text-gray-500 ">Thank you for visiting | Sahil khan | All Rights Reserved | {new Date().getFullYear()}</h1>
      </div>
      
    </div>
  )
}

export default Footer
