import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

const HostVansDashboard = () => {
    const { vanData } = useOutletContext()
    return (
        <section className="py-4 container px-4 mx-auto">
            <div className="container pt-1 pb-4">
                <h2 className="font-bold text-3xl">
                    Your listed vans
                </h2>
            </div>

            <div className="container mx-auto flex flex-col space-y-4">
                {
                    vanData.map(data => (
                        <Link key={data.id} to={'/host/vans/' + data.id}>
                            <div className="flex flex-row space-x-4 px-4 py-3 bg-white rounded items-center">
                                <div className="">
                                    <img src={data.img} alt="" className="w-16 rounded" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-2xl font-bold">
                                        {data.name}
                                    </p>
                                    <p className="text-sm text-gray-400 font-semibold">
                                        ${data.price}/day
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default HostVansDashboard