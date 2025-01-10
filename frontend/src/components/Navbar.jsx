import React, {useState} from 'react'
import NavButton from './NavButton'
import { BsList } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = (props) => {
const toggleShowLogin=()=>{
  props.setShowLogin(true);
}

const toggleDrop=()=>{
  props.setshowdrop(!props.showdrop);
}

  return (
    <div className=' fixed z-50 w-full h-12 shadow-lg flex justify-between items-center pl-2 pr-2'>
      <div className=' font-CroissantOne text-yellow-600'>
        JCommunication
      </div>
      <div className=' max-md:hidden flex gap-6'>
      <Link to="home" smooth={true} duration={200}>
        <NavButton name="Home"/>
      </Link>
      <Link to="features" smooth={true} duration={200}>
        <NavButton name="Features"/>
      </Link>
      <Link to="contact" smooth={true} duration={200}>
        <NavButton name="Contact"/>
      </Link>
      </div>
      <div onClick={toggleShowLogin} className='max-md:hidden flex justify-center w-[90px] gap-6 hover:cursor-pointer hover:border-orange-300 border-2 shadow p-1 font-Aldrich rounded-lg'>
        <div className=' text-orange-600 '>
          signin
        </div>
         
      </div>
      <div onClick={toggleDrop} className='hover:cursor-pointer md:hidden mr-4'>
          <BsList />
        </div> 
    </div>
  )
}

export default Navbar
