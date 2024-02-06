import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logog.png'
import signIn from '../assets/Icon.png'


const Navbar = () => {
    return (
        <nav className="container flex justify-between flex-row space-x-5 mx-auto py-8 px-4 bg-white">
            <div>
                <Link to='/'>
                    <img src={logo} className='w-24' alt="logo" />
                </Link>
            </div>
            <div className='flex flex-row space-x-5'>
                <Link className='text-md text-gray-500 hover:underline' to='/host'>Host</Link>
                <Link className='text-md text-gray-500 hover:underline' to='/about'>About</Link>
                <Link className='text-md text-gray-500 hover:underline' to='/vans'>Vans</Link>
                <Link to='/signin'><img src={signIn} className='w-6' alt="" /></Link>
            </div>
        </nav>
    )
}

export default Navbar