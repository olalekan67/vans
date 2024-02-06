import React from 'react'
import { useOutletContext } from 'react-router-dom';

const VanPrice = () => {
    const [van] = useOutletContext()
  return (
    <section className="mx-auto my-6 container">
        <h2 className="text-3xl font-bold">
            ${van[0].price}.00<span className="text-sm font-semibold text-gray-400">/day</span>
        </h2>
    </section>
  )
}

export default VanPrice