import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Otp from './pages/Otp/Otp'
import SendOtp from './pages/Otp/sendOtp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Auth' element={<Auth/>} />
        <Route path='/SendOtp' element={<SendOtp/>} />
        <Route path='/Verify' element ={<Otp/>} />
        <Route path='/AskQuestion' element={<AskQuestion/>} />
        <Route path='/Questions' element={<Questions/>} />
        <Route path='/Questions/:id' element={<DisplayQuestion />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile/>} />
        
    </Routes>
  )
}

export default AllRoutes