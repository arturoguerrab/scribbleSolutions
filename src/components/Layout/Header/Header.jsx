import React from "react";

import TogglersContainer from "./Togglers/TogglersContainer.jsx";


import { NavLink } from "react-router-dom";
import SideBar from "./SideBar/SideBar.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Header = () => {
	return (
		<header className={"fixed z-20 w-full px-4 lg:px-6 lg:py-4 bg-white"}>
			<div className="flex justify-between items-center">
				<SideBar />
				<NavLink to={"/"}>
					<img src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/jrb12jwl8xqarm4vmagj" alt="" className="h-6" />
				</NavLink>
				<Navbar/>
				{/* <TogglersContainer /> */}
			</div>
		</header>
	);
};

export default Header;
