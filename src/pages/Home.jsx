import React from 'react'
import backgroundImg from '../assets/image53.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id="home" className=' bg-cover bg-no-repeat h-96 md:h-screen' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="flex flex-col py-14 container mx-auto px-4 text-white">
        <h2 className="font-bold text-3xl">
          You got the travel plans, we got the travel vans.
        </h2>

        <p className="text-sm my-12">
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.
        </p>

        <Link to='/vans' className='text-center bg-orange-400 rounded py-2 font-semibold'>Find your van</Link>
      </div>
    </section>
  )
}

export default Home