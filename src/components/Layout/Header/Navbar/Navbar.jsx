import React from "react";
import NavItem from "./NavItem";


const Navbar = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="flex flex-row justify-between w-[28rem] text-lg font-medium">
				<NavItem nombre={"Home"} to={"/"} />

				<NavItem nombre={"About"} to={"/about"} />

				<NavItem nombre={"Gallery"} to={"/gallery"} />

				<NavItem nombre={"Pricing"} to={"/pricing"} />

				<NavItem nombre={"Contact"} to={"/contact"} />
			</ul>
		</nav>
	);
};

export default Navbar;
