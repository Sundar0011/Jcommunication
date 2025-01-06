import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FeautureCard from '../components/FeautureCard'
import LoginCard from '../components/LoginCard'
import SignUpCard from '../components/SignUpCard'
import { BsList } from "react-icons/bs";

const Welcome = () => {

  

  const [showLogin,setShowLogin]= useState(false)

  const [showSignup,setShowSignup] = useState(false)

  const toggleLogin=()=>{
    setShowLogin(true);
  }

 
  return (
    <div >
      <Navbar setShowLogin={setShowLogin}/>
      <div className=' relative h-screen w-screen '>
        <img className=' fixed w-screen h-screen object-cover' src="hero.jpeg" alt="" />
        <div className=' p-14 absolute bg-black bg-opacity-50 inset-0 overflow-scroll '>
          <div className=' mt-20 bg-transparent text-[70px] text-orange-400 font-PermanentMarker'>Building Bridges Through Better Communication.</div>
          <div className=' bg-transparent text-[38px] text-white font-DMSerifText mt-4'>Unlock the art of effective communication with our expert-led courses. Build confidence, improve clarity, and connect with ease—whether you're a professional, a student, or just looking to level up your communication skills</div>
          <div className=' bg-transparent w-full flex justify-center mt-10'>
            <div className=' text-[30px] font-Aldrich border-2 border-orange-400 rounded-lg bg-transparent bg-white flex justify-center w-[200px] text-orange-600 hover:cursor-pointer hover:bg-orange-400 hover:border-white hover:text-white' onClick={toggleLogin}>Join now!</div>
          </div>  

          <div className=' font-Aldrich text-center pt-20 text-[48px] text-orange-400 bg-transparent'>
          Features
          </div>
          <div className=' flex justify-center bg-transparent'>
          <div className= ' bg-transparent p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
            <FeautureCard name="Spoken English" content="Grammar, pronunciation, and real-life conversation practice to enhance your fluency and confidence." image="gd.jpeg" />
            <FeautureCard name="Personality Development" content="Build self-confidence, improve presentation skills, and develop a winning attitude to shine in any situation." image="personality.jpeg" />
            <FeautureCard name="24/7 Access to Resources" content="Explore a rich library of videos, templates, and eBooks to enhance your learning anytime" image="247.jpeg" />
            <FeautureCard name="Interactive Live Sessions" content="Engage with expert trainers in real-time to practice and refine your skills." image="live.jpeg" />
            <FeautureCard name="Video Feedback & Insights" content="Upload your practice sessions and receive constructive feedback from trainers." image="video.jpeg" />
            <FeautureCard name="Interview Techniques" content="Mock interviews, resume building, and body language training to help you ace any interview with confidence." image="interview.jpeg" />
          </div>
          <div>

          </div>
          </div>
          <div className=' font-Aldrich text-center pt-20 text-[48px] text-orange-400 bg-transparent'>
          contact
          </div>
          <div className=' bg-transparent text-orange-400 text-[48px] font-CroissantOne '>We’re Here to Help!</div>
          <div className=' bg-transparent text-white text-[28px] font-CroissantOne'>Have questions or need support? Our team is just a message away. Reach out to us, and we’ll get back to you as soon as possible.</div>
          <div className='bg-white h-10 border-2 border-orange-400 m-2 rounded  grid grid-cols-3'>
            <div className=' bg-transparent flex justify-center items-center'>
              email
            </div>
            <div className=' bg-transparent flex justify-center items-center'>
              mobile
            </div>
            <div className=' bg-transparent flex justify-center items-center'>
              Linked in
            </div>
          </div>
          </div>
          {showLogin&&(   
            <div className=' absolute z-50 h-screen w-screen flex justify-center items-center bg-blend-saturation bg-transparent'>
            <LoginCard setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
           
          </div>
          )}
          {showSignup&&(   
            <div className=' absolute z-50 h-screen w-screen flex justify-center items-center bg-blend-saturation bg-transparent'>
              <SignUpCard setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>
          </div>
          )}

        
      </div>
    </div>
  )
}

export default Welcome
