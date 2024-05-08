import React from "react";

const WeHave = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 h-[30rem] -mt-32 lg:-mt-10 lg:gap-16 max-w-6xl w-full ">
			<div className="text-center">
				<span className="lg:text-lg">You can relax & create</span>
				<h2 className="text-2xl lg:text-4xl font-bold">Take it easy. we got it ;)</h2>
			</div>
			<div className="flex text-center font-bold text-sm gap-4 lg:gap-52 lg:text-xl">
				<div className="flex flex-col justify-center items-center gap-2.5 lg:flex-row">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/izybmdpa3xqsnacwacsl"
						alt=""
						className="h-10 w-10 lg:h-20 lg:w-20"
					/>
					<p>
						We choose
						<span className="block text-blue-300">the best materials</span>
					</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2.5 lg:flex-row">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/qw16yi8nwqmpydc1ezlu"
						alt=""
						className="h-10 w-10 lg:h-20 lg:w-20"
					/>
					<p>
						Our team is formed by
						<span className="block text-yellow-400">the best designers</span>
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-2.5 lg:flex-row text-center font-bold text-sm lg:text-xl ">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/jywgba7nogbtqrrcyiio"
					alt=""
					className="h-10 w-10 lg:h-20 lg:w-20"
				/>
				<p>
					We have
					<span className="block text-purple-300">the best machines</span>
				</p>
			</div>
		</div>
	);
};

export default WeHave;
