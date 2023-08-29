import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({props, Ptext}) => {
  return (
    <Link className={props} to='/'>
      <img  className={props} src="https://seeklogo.com/images/B/bird-company-logo-AD481AD91A-seeklogo.com.png" alt="" />
    </Link>
  )
}
export default Logo