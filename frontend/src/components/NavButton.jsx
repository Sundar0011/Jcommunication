import React from 'react'

const NavButton = (props) => {
  return (
    <div className=' hover:text-orange-600 hover:underline hover:cursor-pointer text-[24px] font-Aldrich'>
      {props.name}
    </div>
  )
}

export default NavButton
