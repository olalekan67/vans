import React, { useContext } from 'react'
import VanContext from '../store/VanContext'
import { Outlet } from 'react-router-dom'

const HostVans = () => {
  const vanData = useContext(VanContext)
  return (
    <section className='bg-red-200 py-4'>

      <Outlet context={vanData}/>
    </section>
  )
}

export default HostVans