import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value)
  }

  const formHandler = async (e) => {
    e.preventDefault()
    const errorP = document.getElementById('error')
    let userError = ''
    if (password.trim().length < 6) {
      userError = 'Password must be at least 6 characters'
    } else if (password.trim() !== confirmPassword.trim()) { userError = 'Password and confirm password must be the same' }

    if (userError) {
      setErrorMessage(userError)
      errorP.classList.toggle('hidden')
      return
    }

    // try {
    //   const res = await fetch('http://localhost:3000/api/users/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'content-type': 'application/json' }
    //   })

    //   const data = await res.json()
    //   if (res.status === 400) {
    //     setErrorMessage(data)
    //     errorP.classList.toggle('hidden')
    //     return
    //   }
    // } catch (error) {
    //   console.log(error.message)
    //   return
    // }

    location.assign('/host')

    errorP.classList.toggle('hidden')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <section id="signin" className='container my-12 px-4 mx-auto'>
      <h2 id="header" className="font-bold text-3xl text-center my-4">
        Sign up
      </h2>

      <form className='mt-10 mb-6' onSubmit={formHandler}>
        <input type="email" value={email} onChange={emailHandler} placeholder='Email address' className="px-2 py-3 w-full border-gray-300 border-2 rounded-t-xl outline-none border-b-0 md:px-4" required />
        <input type="password" value={password} onChange={passwordHandler} placeholder='Password' className="px-2 py-3 w-full border-gray-300 border-2 outline-none border-b-0 md:px-4" required />
        <input type="password" value={confirmPassword} onChange={confirmPasswordHandler} placeholder='Confirm password' className="px-2 py-3 w-full border-gray-300 border-2 rounded-b-xl outline-none md:px-4" required />
        <p id="error" className='hidden text-sm font-semibold text-red-600 py-1'>{errorMessage}</p>

        <button className='font-semibold text-white bg-orange-400 w-full my-8 py-2 rounded-xl'>Sign up</button>
      </form>

      <p className="text-sm font-semibold text-center">
        Already have an account? <Link to='/signin' className='text-orange-400'>Sign in now</Link>
      </p>
    </section>
  )
}

export default Signup