import React from 'react'
import SignInForm from './SignInForm'

/**
 * TODO implement recover password feature (try to use a mail service to send a verification code)
 */


const SignInPage = () => {

  return (
    <div className={"flex flex-col justify-center items-center h-full w-full"}>
      <div className={"mt-40 gap-20"}>
        <div className='text-center mb-8'>
          <h1 className={"text-3xl font-bold text-gray-800"}>Welcome back!</h1>
          <p className={"text-gray-600 text-sm mt-2"}>One step closer to your objectives.</p>
        </div>
        
        <div className='w-96 p-6 bg-white rounded-lg shadow-lg' >
          <SignInForm/>
        </div>
         
      </div>
    </div>
  )
}

export default SignInPage