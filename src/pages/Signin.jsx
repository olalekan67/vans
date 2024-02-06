import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const formHandler = async (e) => {
    e.preventDefault()
    const errorP = document.getElementById('error')
    let userError = ''
    if (password.trim().length < 6) userError = 'password must be at least 6 characters'

    if (userError) {
      setErrorMessage(userError)
      errorP.classList.toggle('hidden')
      return
    }

    // try {
    //   const res = await fetch('http://localhost:3000/api/users/signin', {
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
    //   console.log(error)
    //   return
    // }

    location.assign('/host')
    errorP.classList.toggle('hidden')
    setEmail('')
    setPassword('')
  }
  return (
    <section id="signin" className='container my-12 px-4 mx-auto'>
      <h2 id="header" className="font-bold text-3xl text-center my-4">
        Sign in to your account
      </h2>

      <form className='mt-10 mb-6' onSubmit={formHandler}>
        <input type="email" value={email} onChange={emailHandler} placeholder='Email address' className="px-2 py-3 w-full border-gray-300 border-2 rounded-t-xl outline-none border-b-0 md:px-4" required />
        <input type="password" value={password} onChange={passwordHandler} placeholder='Password' className="px-2 py-3 w-full border-gray-300 border-2 rounded-b-xl outline-none md:px-4" required />
        <p id="error" className='hidden text-sm font-semibold text-red-600 py-1'>{errorMessage}</p>
        <button className='font-semibold text-white bg-orange-400 w-full my-8 py-2 rounded-xl'>Sign in</button>
      </form>

      <p className="text-sm font-semibold text-center">
        Don't have an account? <Link to='/signup' className='text-orange-400'>Create one now</Link>
      </p>
    </section>
  )
}

export default Signin