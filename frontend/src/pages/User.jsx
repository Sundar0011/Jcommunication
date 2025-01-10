import React from 'react'
import Navbar from '../components/Navbar'
import UserNav from '../components/UserNav'
import UserDrop from '../components/UserDrop'
import { CgHome } from 'react-icons/cg'
import UserHome from '../components/UserHome'

const User = () => {
  return (
    <div>
      <UserNav/>
      <UserDrop/>
      <UserHome/>
    </div>
  )
}

export default User
