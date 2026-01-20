import React from "react";
import HeroAbout from "./sections/HeroAbout";
import AboutServices from "./sections/AboutServices";
import AboutBio from "./sections/AboutBio";
import AboutValues from "./sections/AboutValues";

const About = () => {
	return (
		<div className="bg-white min-h-screen w-full flex flex-col">
			<HeroAbout />
            <AboutValues />
			<AboutServices />
			<AboutBio />
		</div>
	);
};

export default About;
