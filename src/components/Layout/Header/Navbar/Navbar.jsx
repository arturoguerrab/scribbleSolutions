import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="flex flex-row items-center gap-8 text-base font-bold">
				<li><NavItem nombre={"Home"} to={"/"} /></li>
				<li><NavItem nombre={"About"} to={"/about"} /></li>
				<li><NavItem nombre={"Gallery"} to={"/gallery"} /></li>
				<li><NavItem nombre={"Pricing"} to={"/pricing"} /></li>
				
                {/* Contact CTA */}
                <li className="ml-4">
                    <NavItem nombre={"Contact"} to={"/contact"} isButton={true} />
                </li>
			</ul>
		</nav>
	);
};

export default Navbar;
