import React from "react";

const HeroAbout = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-1  max-w-6xl text-xs">
			<img
				src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/salghcwnv7vclyruvmf1"
				alt=""
        className="h-28 lg:h-80 mb-8"
			/>
			<h1>We’re Scribble, a family business hsdawhd</h1>
			<h2 className="text-xl font-bold my-1.5">
				<span className="text-cyan-400">Guaranteed quality </span>in all our
				works{" "}
			</h2>
			<span>We’re Scribble, a family business hsdawhd</span>
			<span>Our team is conformed by designers, eauhdnuwuwfhquwf</span>
			<button className="bg-gray-200 rounded-xl p-1 px-2 text-purple-300 font-bold w-24 mt-3">
				Contact us
			</button>
		</div>
	);
};

export default HeroAbout;
