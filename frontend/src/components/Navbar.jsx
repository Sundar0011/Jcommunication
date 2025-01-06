import React from 'react'
import NavButton from './NavButton'

const [drop,setdrop]=useStates(false);

  const [nav,setnav]=useState(true);

const Navbar = (props) => {
const toggleShowLogin=()=>{
  props.setShowLogin(true);
}

  return (
    <div className=' fixed z-50 w-full h-12 shadow-lg flex justify-between items-center pl-2 pr-2'>
      <div className=' font-CroissantOne text-yellow-600'>
        JCommunication
      </div>
      <div className='flex gap-6'>
        <NavButton name="Home"/>
        <NavButton name="Features"/>
        <NavButton name="Contact"/>
      </div>
      <div onClick={toggleShowLogin} className='flex justify-center w-[90px] gap-6 hover:cursor-pointer hover:border-orange-300 border-2 shadow p-1 font-Aldrich rounded-lg'>
        <div className=' text-orange-600 '>
          signin
        </div>
          
      </div>
    </div>
  )
}

export default Navbar
