import HostNav from '../component/HostNav'
import { Outlet } from 'react-router-dom'

const Host = () => {
  return (
    <section>
      <HostNav />

      <Outlet />
    </section >
  )
}

export default Host