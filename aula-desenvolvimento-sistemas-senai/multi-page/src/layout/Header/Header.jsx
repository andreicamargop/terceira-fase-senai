import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
        <nav className='flex' >
      <NavLink to="/" end>
        Home
      </NavLink>
      <p></p>
      <NavLink to="/sobre" end>
        sobre
      </NavLink>

    </nav>
    </div>
  )
}

export default Header
