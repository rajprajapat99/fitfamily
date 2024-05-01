import React from 'react'
import logo from './Images/logo.svg'

const Header = () => {
  return (
    <>

      <div className='logo_bg h-20 flex justify-center items-top'>
        <div className='logo_div h-28 w-28'>
          <img className='logo_img h-full w-full' alt='Logo' src={logo} />
        </div>
      </div>
    </>
  )
}

export default Header