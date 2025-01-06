import React from 'react'

const SignUpCard = (props) => {
    const closeSignup=()=>{
        props.setShowSignup(false)
    }

    const toggleSignup=()=>{
        props.setShowLogin(false)
        props.setShowSignup(true)
      }
      const toggleLogin=()=>{
        props.setShowLogin(true)
        props.setShowSignup(false)
      }
  return (
    
       <div className='border  shadow-lg w-[380px] h-[520px] p-4 rounded '>
      <div className='  flex justify-between'>
        <div className=' text-[30px] text-orange-400 font-Aldrich'>Login</div> 
        <div onClick={closeSignup} className='w-4 text-center hover:text-red-600  rounded bg-transparent hover:cursor-pointer'>X</div>
      </div>
        
      <div className=' mt-6'>
            <div className='font-DMSerifText'>
                Name
            </div>
            <div className='mt-2'>
                <input className=' hover:border-orange-500 focus:outline-none focus:border-orange-400  border-2 border-gray-300 rounded w-full' type="text" />
            </div>
        </div>

        <div className=' mt-6'>
            <div className=' font-DMSerifText'>
                Email
            </div>
            <div className='mt-2'>
                <input className=' hover:border-orange-500 focus:outline-none focus:border-orange-400  border-2 border-gray-300 rounded w-full' type="text" />
            </div>
        </div>
        
        <div className=' mt-6'>
            <div className='font-DMSerifText'>
                Password
            </div>
            <div className='mt-2'>
                <input className=' hover:border-orange-500 focus:outline-none focus:border-orange-400  border-2 border-gray-300 rounded w-full' type="text" />
            </div>
        </div>
        <div>
            <input className=' hover:cursor-pointer hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2 font-Aldrich border bg-orange-400 rounded w-full mt-8 text-white' type="submit" value="submit" />
        </div>
        <div  className='font-DMSerifText flex mt-4'>Already have an account? <div onClick={toggleLogin} className=' hover:cursor-pointer font-Aldrich ml-2 text-orange-400'>Signin</div> </div>

    </div>
   
  )
}

export default SignUpCard
