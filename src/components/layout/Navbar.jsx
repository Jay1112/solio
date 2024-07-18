import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../ui/Button';

function Navbar() {
  const navigate = useNavigate();

  function handleSignIn(){
    navigate('/sign-in/');
  }

  return (
    <>
        <nav className='text-light p-4 flex nav-box-shadow'>
            <div className='flex-1 flex items-center justify-start'>
                <p className='text-[24px] font-poppins'><NavLink to='/'>Solio</NavLink></p>
                <p className='font-poppins ml-6 mr-3 hover:text-primary'><NavLink to='/about'>About</NavLink></p>
                <p className='font-poppins mr-3 ml-3 hover:text-primary'><NavLink to="/contact">Contact</NavLink></p>
            </div>
            <div className='flex items-center justify-center'>
                <Button buttonStyle='primary-button px-2 py-[4px] text-lg rounded-sm' clickHandler={handleSignIn}>Sign-In</Button>
            </div>
        </nav>
    </>
  )
}

export default Navbar