import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanDetails = () => {
    const [van] = useOutletContext()
  return (
    <section className='container mx-auto py-6'>
        {
            van.map(v => (
                <div key={v.id} className="flex flex-col space-y-4">
                    <div id="name" className="flex flex-row space-x-2">
                        <p className="text-sm font-bold">
                            Name:
                        </p>
                        <p className='text-sm font-semibold text-gray-400'>{v.name}</p>
                    </div>

                    <div id="category" className="flex flex-row space-x-2">
                        <p className="text-sm font-bold">
                        Category:
                        </p>
                        <p className='text-sm font-semibold text-gray-400'>{v.category}</p>
                    </div>

                    <div id="description" className="flex flex-row space-x-2">
                        <p className="text-sm font-bold">
                        description:
                        </p>
                        <p className='text-sm font-semibold text-gray-400'>
                            The {v.name} is a van designed to get you out of the house and into the nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!
                        </p>
                    </div>

                    <div id="visibility" className="flex flex-row space-x-2">
                        <p className="text-sm font-bold">
                        Visibility:
                        </p>
                        <p className='text-sm font-semibold text-gray-400'>Public</p>
                    </div>

                </div>
            ))
        }

    </section>
  )
}

export default VanDetails