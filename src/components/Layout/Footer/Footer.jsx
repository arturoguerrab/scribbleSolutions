import React from "react";
import { NavLink } from "react-router-dom";
import ContactIcons from "./Contact/ContactIcons";
import NavItem from "../Header/Navbar/NavItem";

const Footer = () => {
	return (
		<footer className="h-40 bg-white">
			<div className="flex flex-col h-full justify-center items-center gap-3">
				<ContactIcons />
				<ul className="flex flex-row justify-evenly gap-3 text-sm">
					<NavItem nombre={"about"} to={"/about"} />

					<NavItem nombre={"gallery"} to={"/gallery"} />

					<NavItem nombre={"pricing"} to={"/pricing"} />

					<NavItem nombre={"contact"} to={"/contact"} />
				</ul>
				<NavLink to={"/"} className=" text-black text-sm">
					ScribbleSolutions FL © | All Rights Reserverd
				</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
