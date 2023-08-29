import React from 'react'
import { useState, useEffect } from "react";
import { MobileNav,IconButton} from "@material-tailwind/react";
import Logo from './Logo/Logo';
import TogglersContainer from './Togglers/TogglersContainer';
import NavbarContainer from './Navbar/NavbarContainer';
import NavList from './Navbar/NavList';
import { containerClass } from '../../../utils/ClassRepeated';


const HeaderContainer = () =>{

    const [openNav, setOpenNav] = useState(false);
    const toggleNav = ()=>{ return setOpenNav(!openNav) }

    useEffect(() => {

        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

    }, []);

    return (
        <div className="w-screen py-2 fixed bg-white">

            <div className={containerClass + "grid grid-cols-12 items-center"}>
                <Logo props={'col-span-4 md:col-span-2 h-[50px] w-[70px]'}/>
                <NavbarContainer/>
                <TogglersContainer/>
                <IconButton
                    variant="text"
                    className="col-span-1 col-start-12 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                </IconButton>
            </div>

            <MobileNav open={openNav}>
                <div className='pt-1'>
                    <NavList setOpenNav={toggleNav}/>
                </div>
            </MobileNav>

        </div>
    );
}

export default HeaderContainer