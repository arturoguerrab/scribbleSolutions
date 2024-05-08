import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({nombre, to, className}) => {
  return (
    <NavLink to={to} className={({isActive})=> isActive ? ` text-black ${className} ` : ` text-gray-500  hover:text-black ${className} `}>
      <li>{nombre}</li>           
    </NavLink>
  )
}

export default NavItem