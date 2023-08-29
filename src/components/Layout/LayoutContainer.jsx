import React from 'react'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'


const Layout = ({children}) => {
  return (
    <div>
        <HeaderContainer/>
            {children}
        <FooterContainer/>
    </div>
  )
}

export default Layout