import React, { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import VanContext from './store/VanContext'
import van1 from './assets/van1.png'
import van2 from './assets/van2.png'
import van3 from './assets/van3.png'
import van4 from './assets/van4.png'
import van5 from './assets/van5.png'
import van6 from './assets/van6.png'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Vans from './pages/Vans'
import Error from './pages/Error'
import Navbar from './component/Navbar'
import Host from './pages/Host'
import Van from './pages/Van'
import Income from './pages/Income'
import Reviews from './pages/Reviews'
import HostVans from './pages/HostVans'
import Dashboard from './pages/Dashboard'
import HostVansDashboard from './pages/HostVansDashboard'
import HostVan from './pages/HostVan'
import VanDetails from './pages/VanDetails'
import VanPrice from './pages/VanPrice'
import VanPhotos from './pages/VanPhotos'

const App = () => {
  const vanData = [
    {
      id: 1, category: 'Simple', name: 'Modest Explorer', price: 60, img: van1
    },
    {
      id: 2, category: 'Rugged', name: 'Beach Bum', price: 80, img: van2
    },
    {
      id: 3, category: 'Luxury', name: 'Reliable Red', price: 100, img: van3
    },
    {
      id: 4, category: 'Simple', name: 'Dream Finder', price: 65, img: van4
    },
    {
      id: 5, category: 'Luxury', name: 'The Cruiser', price: 120, img: van5
    },
    {
      id: 6, category: 'Rugged', name: 'Green Wonder', price: 70, img: van6
    }
  ]
  return (
    <>
      <VanContext.Provider value={{ vanData }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<Van />} />
          <Route path='/host/' element={<Host />}>
            <Route path='' element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />}>
              <Route path='' element={<HostVansDashboard />} />
              <Route path=':id' element={<HostVan />}>
                <Route path='' element={<VanDetails />} />
                <Route path='pricing' element={<VanPrice />} />
                <Route path='photos' element={<VanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </VanContext.Provider>

    </>
  )
}

export default App