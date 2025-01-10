import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FeautureCard from '../components/FeautureCard';
import LoginCard from '../components/LoginCard';
import SignUpCard from '../components/SignUpCard';
import Dropdown from '../components/Dropdown';

const Welcome = (props) => {
  const [showdrop, setshowdrop] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = (props) => {
    setShowLogin(true);
  };

  return (
    <div className=''>
      {/* Navbar */}
      <div id="home">
        <Navbar setShowLogin={setShowLogin} setshowdrop={setshowdrop} showdrop={showdrop} />
      </div>
      {showdrop && <Dropdown />}

      {/* Main Container */}
      <div
        className="relative min-h-screen bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url("hero.jpeg")` }}
      >
        {/* Content */}
        <div className="p-12 max-sm:p-2 text-white bg-black bg-opacity-60">
          {/* Welcome Text */}
          <div className=" sm:text-[70px] bg-transparent mt-20 text-[38px] font-PermanentMarker text-orange-400 flex text-center">
            Building Bridges Through Better Communication.
          </div>
          <div className=" sm:text-[38px] bg-transparent mt-4 text-[24px] font-DMSerifText flex text-center">
            Unlock the art of effective communication with our expert-led courses. Build confidence, improve clarity, and connect with ease—whether you're a professional, a student, or just looking to level up your communication skills.
          </div>

          {/* Join Button */}
          <div className="max-sm:mt-4 bg-transparent mt-16 flex justify-center">
            <div
              className="  bg-transparent text-[30px] font-Aldrich border-2 border-orange-400 rounded-lg bg-white text-orange-600 px-6 py-2 hover:cursor-pointer hover:bg-orange-400 hover:text-white"
              onClick={toggleLogin}
            >
              Join now!
            </div>
          </div>

          {/* Features Section */}

          <div id='features' className=" bg-transparent pt-20 text-center text-[48px]  font-Aldrich text-orange-400">Features</div>
          <div className='flex justify-center mt-10 bg-transparent'>
          <div className="bg-transparent  grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
            <FeautureCard name="Spoken English" content="Grammar, pronunciation, and real-life conversation practice to enhance your fluency and confidence." image="gd.jpeg" />
            <FeautureCard name="Personality Development" content="Build self-confidence, improve presentation skills, and develop a winning attitude to shine in any situation." image="personality.jpeg" />
            <FeautureCard name="24/7 Access to Resources" content="Explore a rich library of videos, templates, and eBooks to enhance your learning anytime." image="247.jpeg" />
            <FeautureCard name="Interactive Live Sessions" content="Engage with expert trainers in real-time to practice and refine your skills." image="live.jpeg" />
            <FeautureCard name="Video Feedback & Insights" content="Upload your practice sessions and receive constructive feedback from trainers." image="video.jpeg" />
            <FeautureCard name="Interview Techniques" content="Mock interviews, resume building, and body language training to help you ace any interview with confidence." image="interview.jpeg" />
          </div>
          </div>
          {/* Contact Section */}
          <div id="contact" className="bg-transparent pt-20 text-center text-[48px] font-Aldrich text-orange-400">Contact</div>
          <div className="bg-transparent text-center text-[28px] font-CroissantOne">
            Have questions or need support? Our team is just a message away. Reach out to us, and we’ll get back to you as soon as possible.
          </div>
          <div className="bg-transparent mt-6 bg-white border-2 border-orange-400 rounded-md grid grid-cols-3">
            <div className="bg-transparent flex justify-center items-center text-orange-400">Email</div>
            <div className="bg-transparent flex justify-center items-center text-orange-400">Mobile</div>
            <div className="bg-transparent flex justify-center items-center text-orange-400">LinkedIn</div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-transparent">
          <LoginCard setShowLogin={setShowLogin} setShowSignup={setShowSignup} setShowUser={props.setShowUser} setShowWelcome={props.setShowWelcome}/>
        </div>
      )}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-transparent ">
          <SignUpCard setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
        </div>
      )}
    </div>
  );
};

export default Welcome;
