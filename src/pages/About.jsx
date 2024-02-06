import React from 'react'
import { Link } from 'react-router-dom'
import header from '../assets/image 55.png'

const About = () => {
  return (
    <section className='flex flex-col'>
        <div>
            <img src={header} className='h-48 md:h-72 w-full' alt="" />
        </div>
        <div className='flex flex-col mx-auto px-4 my-12 container'>
            <h2 className="text-start text-3xl font-bold mb-10">
                Don't squeeze in a sedan when you could relax in a van
            </h2>
            <p className="text-sm text-start mb-12">
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are rectified before each trip to ensure our travel plans can off without a hitch.(Hitch costs extra) <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>

            <div className="p-4 mx-auto flex flex-col bg-orange-200 rounded space-y-7 md: w-full">
                <h3 className='text-2xl font-bold'>Your destination is waiting. <br /> Your van is ready.</h3>

                <Link to='/vans' className='text-white bg-black py-4 px-6 w-64 text-center font-semibold rounded-xl'>Explore our vans</Link>
            </div>
        </div>
    </section>
  )
}

export default About