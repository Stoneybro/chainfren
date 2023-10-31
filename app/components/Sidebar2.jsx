'use client'
import React from 'react'
import Ai from './Ai'
import { useGlobalContext } from './utils/Provider'
import Chatcomponent from './Chatcomponent'

const Sidebar2 = () => {

    const {nav,setNav,heading}=useGlobalContext()

  return (
    <>
    <div className=" h-full flex-col mb-16 md:flex px-6  pt-8 hidden  top-0 left-0 w-full dark:text-[#6B6776] text-[#000000b9] dark:bg-primary bg-white
 gap-4 justify-start font-medium">
        <div className="dark:text-white text-black text-lg">Web 3 for Beginners</div>
        <div className="flex flex-col gap-4">
          {heading?.map((h4)=>{
            return <div className="">{h4}</div>
          })}
        </div>





</div>

{
          <div className={`fixed top-20  h-screen ${nav?'left-0':'left-[-100%]'} transition-all duration-300 w-[75%] dark:bg-primary bg-white flex flex-col gap-4 md:hidden px-6 pt-10 dark:text-[#ffffff3c] font-serif text-[#606060]
          `}>
        <div className="dark:text-white text-black text-lg">Web 3 for Beginners</div>
        <div className="flex flex-col gap-4">
        {heading?.map((h4)=>{
            return <div className="">{h4}</div>
          })}
        </div>
          </div>
          }
</>
  )
}

export default Sidebar2






