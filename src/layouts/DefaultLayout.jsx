import React from 'react'

function DefaultLayout({
    children
}) {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-dark'>
        { children }
    </div>
  )
}

export default DefaultLayout