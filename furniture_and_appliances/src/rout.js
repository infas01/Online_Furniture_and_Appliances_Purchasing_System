import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignupPage from './Pages/SignupPage/SignupPage'

function Rout() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/Main" replace />} />
      <Route path='/Main' element={<MainPage/>}/>
      <Route path='/LogIn' element={<LoginPage/>}/>
      <Route path='/SignUp' element={<SignupPage/>}/>

    </Routes>
    </>
  )
}

export default Rout