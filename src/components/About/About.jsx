import React from "react";
import HeroAbout from "./AboutElements/HeroAbout";
import { OurServices } from "./AboutElements/OurServices";
import Results from "./AboutElements/Results";

const About = () => {
	return (
		<div className=" bg-white flex flex-col gap-10 justify-center items-center">
			<HeroAbout/>
			<OurServices/>
			<Results/>
		</div>
	);
};

export default About;
