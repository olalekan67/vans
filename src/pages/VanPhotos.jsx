import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanPhotos = () => {
    const [van] = useOutletContext()
  return (
    <div className='container mx-auto py-6'>
        <img src={van[0].img} alt="" className="w-32 rounded" />
    </div>
  )
}

export default VanPhotos