import React from 'react'
import Navbar from '../components/layout/Navbar'

function NavbarLayout({ children }) {
  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto bg-dark'>
        <header>
            <Navbar />
        </header>
        <main>
            { children }
        </main>
    </div>
  )
}

export default NavbarLayout