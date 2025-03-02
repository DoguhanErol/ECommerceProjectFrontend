import React from 'react'
import Header from '../modals/Header'
import Footer from '../modals/Footer'
import { Outlet } from 'react-router-dom'

const Layout:React.FC = () => {
  return (
    
    <main className='bg-base-200'>
        <div>
        <Header />

      <main>
        <Outlet /> {/* Bu, nested route'ların render edileceği yerdir */}
      </main>

        <Footer />
    </div>
    </main>
  )
}

export default Layout