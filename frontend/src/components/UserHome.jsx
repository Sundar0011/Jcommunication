import React from 'react'

const UserHome = () => {
  return (
    <div className=' w-screen h-auto mt-20'>
    <div className=' w-screen h-200px   m-2 grid grid-cols-2'>
        <div className=' w-full h-full object-cover flex justify-center items-center' >
        <img  src="englishpro.png" alt="" />
        </div>
        <div className=" sm:text-[44px] bg-transparent mt-20 text-[38px] font-PermanentMarker text-orange-400 flex justify-center text-center ">Transform Your Communication, Transform Your Life</div>

    </div>
      <div className=" sm:text-[38px] bg-transparent mt-4 text-[24px] font-DMSerifText flex text-center p-10">Unlock your true potential with expert-led courses designed to improve your communication skills, enhance your confidence, and empower your success</div>
    </div>
  )
}

export default UserHome
