import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import VanContext from '../store/VanContext'


const Vans = () => {
  const [filterState, setFilterState] = useState('')
  const { vanData } = useContext(VanContext)

  const filterVans = (e) => {
    let filter = e.target.innerText
    setFilterState(filter)

    if(filter.includes('Clear')){
      setFilterState('')
    }
  }

  return (
    <section id="vans" className='container mx-auto px-4 my-10'>
      <h2 className="font-bold text-3xl text-start">
        Explore our van options
      </h2>

      <div className="flex flex-row space-x-4 mt-6">
        <button className="font-medium bg-orange-100 rounded px-4 py-2 hover:bg-orange-400 hover:text-white" onClick={filterVans}>Simple</button>

        <button className="font-medium bg-orange-100 rounded px-4 py-2 hover:bg-black hover:text-white" onClick={filterVans}>Luxury</button>

        <button className="bg-orange-100 rounded font-medium px-4 py-2 hover:bg-green-900 hover:text-white" onClick={filterVans}>Rugged</button>

        <button className="font-medium underline" onClick={filterVans}>Clear filters</button>
      </div>

      <div className="grid grid-cols-1 space-y-4 container mx-auto my-6  md:grid-cols-2 lg:grid-cols-3 items-center md:space-x-4">
        {!filterState && vanData.map((van) => (
          <Link to={'/vans/'+ van.id} key={van.id}>
          <div className="flex flex-col md:w-72" key={van.id}>
            <div>
              <img src={van.img} className='rounded md:h-72' alt="" />
            </div>
            <div className="flex flex-col my-4">
              <div className="flex flex-row justify-between">
                <h2 className="font-semibold text-xl">
                  {van.name}
                </h2>
                <p className="font-semibold text-xl">
                  ${van.price}<span className='text-sm font-normal'>/day</span>
                </p>
              </div>
              {
                van.category == 'Simple' && <button className="font-semibold text-white bg-orange-400 px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              {
                van.category == 'Rugged' && <button className="font-semibold text-white bg-green-900 px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              {
                van.category == 'Luxury' && <button className="font-semibold text-white bg-black px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              
            </div>
          </div>
          </Link>
        ))}

        {filterState && vanData.map((van) => (
          van.category === filterState &&
          <Link to={'/vans/'+ van.id} key={van.id}>
          <div className="flex flex-col md:w-72" key={van.id}>
            <div>
              <img src={van.img} className='rounded md:h-72' alt="" />
            </div>
            <div className="flex flex-col my-4">
              <div className="flex flex-row justify-between">
                <h2 className="font-semibold text-xl">
                  {van.name}
                </h2>
                <p className="font-semibold text-xl">
                  ${van.price}<span className='text-sm font-normal'>/day</span>
                </p>
              </div>
              {
                van.category == 'Simple' && <button className="font-semibold text-white bg-orange-400 px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              {
                van.category == 'Rugged' && <button className="font-semibold text-white bg-green-900 px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              {
                van.category == 'Luxury' && <button className="font-semibold text-white bg-black px-4 py-2 w-2/4 rounded mt-2">{van.category}</button>
              }
              
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Vans