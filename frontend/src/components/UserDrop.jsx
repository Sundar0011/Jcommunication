import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { CgPlayButtonO } from "react-icons/cg";

const UserDrop = () => {
  return (
    <div className=' w-10 h-auto p-2 sm:hidden'>
      <div className=' mt-4 text-[30px] '>
        <FaHome />
      </div>
        <div className=' mt-4 text-[30px]'>
            <CgPlayButtonO />
        </div>
      <div className=' mt-4 text-[30px]'>
        <FiTarget />
      </div>
      <div className=' mt-4 text-[30px]'>
        <IoIosContact />
      </div>
    </div>
  )
}

export default UserDrop
