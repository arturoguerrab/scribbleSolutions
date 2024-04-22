import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
	return (
		<ul className="flex flex-row justify-between w-96">
			<NavItem nombre={"Home"} to={"/"} />

			<NavItem nombre={"About"} to={"/about"} />

			<NavItem nombre={"Gallery"} to={"/gallery"} />

			<NavItem nombre={"Pricing"} to={"/pricing"} />

			<NavItem nombre={"Contact"} to={"/contact"} />
		</ul>
	);
};

export default NavList;
