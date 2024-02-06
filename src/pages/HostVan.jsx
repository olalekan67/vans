import React, { useContext } from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import VanContext from '../store/VanContext'
import Error from './Error'

const HostVan = () => {
    const { id } = useParams()
    let { vanData } = useContext(VanContext)
    const van = vanData.filter(v => v.id === parseInt(id))
    return (
        <section className='container mx-auto px-4'>
            <Link to='/host/vans' className="font-bold underline pb-8">Back to all vans</Link>
            {   van.length > 0 &&
                <section className='bg-white container mx-auto px-4 py-6 my-6 rounded'>
                    <div>
                        {
                            van.map(v => (
                                <div key={v.id} className="flex flex-row space-x-4 items-center my-6">
                                    <div className="">
                                        <img src={v.img} alt="" className="w-32 rounded" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        {
                                            v.category == 'Simple' && <button className="font-semibold text-white w-3/4 bg-orange-400 px-3 py-2 rounded">{v.category}</button>
                                        }
                                        {
                                            v.category == 'Rugged' && <button className="font-semibold w-3/4 text-white bg-green-900 px-3 py-2 rounded">{v.category}</button>
                                        }
                                        {
                                            v.category == 'Luxury' && <button className="font-semibold w-3/4 text-white bg-black px-3 py-2 rounded">{v.category}</button>
                                        }

                                        <h2 className='font-bold text-2xl'>{v.name}</h2>
                                        <p className='font-semibold'>
                                            ${v.price}<span className='text-gray-400'>/day</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <nav className="flex flex-row space-x-5 mx-auto">
                        <Link to={'/host/vans/' + id} className='text-sm font-bold hover:underline'>Details</Link>

                        <Link to={'/host/vans/' + id + '/pricing'} className='text-sm font-bold hover:underline'>Pricing</Link>

                        <Link to={'/host/vans/' + id + '/photos'} className='text-sm font-bold hover:underline'>Photos</Link>
                    </nav>

                    <Outlet context={[van]} />
                </section>
            }

            {van.length <= 0 && <Error />}
        </section>
    )
}

export default HostVan