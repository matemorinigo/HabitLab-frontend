import React from 'react'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
  return (
    <div className={"flex flex-col justify-center items-center h-full w-full"}>
    <div className={"mt-40 gap-20"}>
      <div className='text-center mb-8'>
        <h1 className={"text-3xl font-bold text-gray-800"}>Join HabitLab Today!</h1>
        <p className={"text-gray-600 text-sm mt-2"}>Start building better habits, one day at a time.</p>
      </div>
      
      <div className='w-96  p-6 bg-white rounded-lg shadow-lg' >
        <SignUpForm/>
      </div>
       
    </div>
  </div>
  )
}

export default SignUpPage