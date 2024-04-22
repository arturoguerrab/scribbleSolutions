import React from "react";
import { NavLink } from "react-router-dom";
import ContactIcons from "./Contact/ContactIcons";
import NavList from "../Header/Navbar/NavList";

const Footer = () => {
	return (
		<footer className="h-40 bg-white">
			<div className="flex flex-col  h-full justify-evenly items-center">
				<ContactIcons />
				<NavList />
				<NavLink
					to={"/"}
					className=" text-black"
				>
					ScribbleSolutions FL © | All Rights Reserverd
				</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
