import React from 'react'
import { Link } from 'react-router-dom'

const HostNav = () => {
    const navLinks = ['income', 'vans', 'reviews']
  return (
    <nav className="flex flex-row space-x-2 md:space-x-4 container px-4 my-6 mx-auto">
        <Link to='/host' className='font-medium text-l text-gray-800 hover:text-bold hover:underline'>Dashboard</Link>
        {navLinks.map((link, index) => (
            <Link key={index} to={'/host/'+ link} className='font-medium capitalize text-l text-gray-800 hover:text-bold hover:underline'>{link}</Link>
        ))}
    </nav>
  )
}

export default HostNav