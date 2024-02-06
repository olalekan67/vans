import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import VanContext from '../store/VanContext'

const Dashboard = () => {
  const { vanData } = useContext(VanContext)

  return (
    <section className='w-full'>
    <div className="bg-orange-100 w-1/1 flex flex-col">
      <div className='container mx-auto px-4 py-6'>
        <h2 className="font-bold text-3xl text-start">
          Welcome!
        </h2>
        <div>
          <div className="flex font-semibold flex-row my-4 justify-between container">
            <p>Income last <span>30 days</span></p>
            <Link to='/host/income'>Details</Link>
          </div>
          <h2 className="font-bold text-4xl">
            $2,260
          </h2>
        </div>

      </div>
    </div>
    <div className="bg-orange-200 w-1/1 py-2">
      <div className="flex flex-row justify-between container mx-auto px-4 py-6">
        <p className='font-bold text-2xl'>Review score 5.0<span className='text-gray-300'>/5</span></p>
        <Link className='font-semibold' to='/host/reviews'>Details</Link>
      </div>
    </div>

    <div className=" bg-red-200 w-1/1 py-4">
      <div className="container mx-auto flex justify-between px-4 items-center flex-row py-4">
        <h3 className="font-bold text-2xl">Your listed vans</h3>
        <Link className='font-semibold' to='/host/vans'>View all</Link>
      </div>
      <div className='container mx-auto px-4flex flex-col space-y-4'>
      {
        vanData.map((van) => (
          <div key={van.id} className="container mx-auto py-4 flex flex-row justify-between bg-white rounded items-center px-4">
            <div className="flex flex-row space-x-4">
              <img src={van.img} className='w-16 rounded' alt="" />
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold text-xl">{van.name}</h3>
                <p className='font-semibold text-gray-500'>${van.price}/day</p>
              </div>
            </div>
            <Link>Edit</Link>
          </div>
        ))
      }

    </div>
  </div>
</section>
  )
}

export default Dashboard