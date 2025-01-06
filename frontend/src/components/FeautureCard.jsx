import React from 'react'

const FeautureCard = (props) => {
  return (
    <div className='bg-white h-[460px] w-[300px] p-2 rounded-md m-4'>
        <div className=' '><img src={props.image} alt="" /></div>
        <div className=' bg-transparent mt-2 text-orange-400 font-Delius font-bold'>{props.name}</div>
        <div className=' bg-transparent mt-2 font-Delius'>{props.content}</div> 
        {/* <div className=' text-center flex justify-center'>
            <div className=' text-white bg-orange-500 w-20 rounded-md'>more </div> 
        </div>   */}
    </div>
  )
}

export default FeautureCard
