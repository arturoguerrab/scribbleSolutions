import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar/SideBar.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
			<div className="container mx-auto flex justify-between items-center">
                {/* Mobile Sidebar */}
				<SideBar />
				
                {/* Logo */}
                <NavLink to={"/"} className="relative z-50 transform hover:scale-105 transition-transform duration-300">
					<img src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/jrb12jwl8xqarm4vmagj" alt="Scribble Logo" className="h-8 md:h-10" />
				</NavLink>
				
                {/* Desktop Nav */}
                <Navbar/>
			</div>
		</header>
	);
};

export default Header;
