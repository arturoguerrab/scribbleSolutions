import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({nombre, to, className}) => {
  return (
    <NavLink to={to} className={({isActive})=> isActive ? `text-cyan-300 ${className}` : `text-black hover:text-cyan-300 ${className}`}>
      <li>{nombre}</li>           
    </NavLink>
  )
}

export default NavItem