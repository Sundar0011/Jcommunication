import React from 'react'
import NavButton from './NavButton'
import { Link } from "react-scroll";
const Dropdown = () => {

    
  return (
    <div  className='md:hidden flex-row text-center fixed mt-12 right-0  h-auto w-[200px] z-50'>

        <div className='mt-2'>
            <Link to="home" smooth={true} duration={200}>
            <NavButton name="Home"/>
          </Link>
        </div>
        <div className='mt-2'>
              <Link to="features" smooth={true} duration={200}>
              <NavButton name="Features"/>
            </Link>
        </div>
        <div className='mt-2'>
          <Link to="contact" smooth={true} duration={200}>
          <NavButton name="Contact"/>
          </Link>
        </div>
        
    </div>
  )
}

export default Dropdown
