import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { CgPlayButtonO } from "react-icons/cg";
import { BsList } from "react-icons/bs";
const UserNav = () => {
  return (
    <div className=' fixed top-0 w-screen h-12 shadow-lg flex items-center justify-between p-2'>
    <div  className='hover:cursor-pointer md:hidden mr-4'>
              <BsList />
    </div> 
        <div className=' font-CroissantOne text-yellow-600'>
        JCommunication
        </div>
        <div className=' hidden  sm:flex '>
            <div className='   text-[30px] '>
                <FaHome />
                </div>
                <div className='ml-4  text-[30px]'>
                    <CgPlayButtonO />
                </div>
                <div className='ml-4  text-[30px]'>
                <FiTarget />
                </div>
                <div className='ml-4  text-[30px]'>
                <IoIosContact />
                </div>
        </div>
      <div className=' w-8 h-8 shadow-lg rounded-full flex justify-center items-center'>
        <CiUser />
      </div>
    </div>
  )
}

export default UserNav
