import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '../ui/Button';

function DashboardNavbar() {
  
  function handleLogout(){
    console.log("logout...")
  }

  return (
    <>
        <nav className='text-light p-4 flex nav-box-shadow bg-dark border-b-2 border-subsecondary'>
            <div className='flex-1 flex items-center justify-start'>
                <NavLink navLinkStyle='text-[24px] font-monster'  to='/'>Solio</NavLink>
            </div>
            <div className='flex items-center justify-center'>
                <Button buttonStyle='primary-button px-2 py-[4px] text-lg rounded-sm' clickHandler={handleLogout}>
                  Logout
                </Button>
            </div>
        </nav>
    </>
  )
}

export default DashboardNavbar;