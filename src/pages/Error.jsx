import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='mt-32 mx-auto container flex flex-col items-center'>
      <h2 className='font-bold text-2xl text-start md:text-4xl px-4 mb-10'>
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to='/' className='text-white bg-black py-4 px-14 rounded font-semibold'>Return to Home</Link>

    </div>
  )
}

export default Error