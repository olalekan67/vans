import React, { useContext, useState } from 'react'
import VanContext from '../store/VanContext'
import { Link, useParams } from 'react-router-dom'
import Error from './Error'

const Van = () => {
    const { id } = useParams()
    const {vanData} = useContext(VanContext)
    const check = vanData.filter(van => van.id == id)
    return (
        <section className='container mx-auto px-4 mt-8'>
            <Link to='/vans' className='text-l font-semibold underline'>Back to all vans</Link>

            {
                check.length > 0 && <div className='my-6 container mx-auto'>
                    {check.map(van => (
                        <div key={van.id}>
                            <img src={van.img} className='rounded md:h-96 md:mx-auto' alt="" />

                            {
                                van.category == 'Simple' && <button className="font-semibold text-white bg-orange-400 px-4 py-2 w-2/4 md:w-1/4 rounded mt-8">{van.category}</button>
                            }
                            {
                                van.category == 'Rugged' && <button className="font-semibold text-white bg-green-900 px-4 py-2 w-2/4 md:w-1/4  rounded mt-8">{van.category}</button>
                            }
                            {
                                van.category == 'Luxury' && <button className="font-semibold text-white bg-black px-4 py-2 w-2/4 md:w-1/4 rounded mt-8">{van.category}</button>
                            }

                            <div className="flex flex-col my-4 container">
                                <h3 className='text-3xl font-bold py-4'>{van.name}</h3>
                                <p className='font-bold text-2xl py-4'>
                                    ${van.price}<span className='text-lg font-semibold'>/day</span>
                                </p>

                                <p className="text-xl font-normal">
                                    The {van.name} is a van designed to get you out of the house and into the nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!
                                </p>
                            </div>
                            <button className="bg-orange-400 text-white font-semibold w-full py-2 rounded my-4">Rent this van</button>
                        </div>

                    ))}
                </div>
            }
            {
                check.length <= 0 && <Error />
            }
        </section>
    )
}

export default Van