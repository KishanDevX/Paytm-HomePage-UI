import React from 'react'

const Header = () => {
  return (
    <header>
      <div id="left">
        <div id="menu">
        <i className="ri-menu-2-line"></i>
        </div>
        <div id="logo">
          <img src="src/assets/logos/paytmLogo.svg" alt="logo" />
        </div>
      </div>
      <div id="profile">
        <img src="src/assets/icons/profileIcon.svg" alt="profile" />
      </div>
    </header>
  )
}

export default Header