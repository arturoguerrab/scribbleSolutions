import React from "react";

const Hero = () => {
	return (
		<div className="flex flex-col justify-center lg:flex-row lg:items-center h-[42rem] max-w-6xl">
			<div className="flex flex-col ps-5 gap-3 ">
				<h1 className="font-light pb-3">Hi! We're Scribble :)</h1>
				<h2 className="text-3xl font-bold">
					We Make your ideas{" "}
					<span className="block">
						a <span className=" text-light-blue-400">re</span>
						<span className="text-purple-300 ">ali</span>
						<span className="text-yellow-400">ty</span>
					</span>
				</h2>
				<p className="hidden lg:block">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
					expedita!
				</p>
				<button className="bg-gray-200 rounded-xl p-1 px-2 text-purple-300 w-24">
					Contact us
				</button>
			</div>
			<img
				src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/lou0a0ileydrsib8rnls"
				alt=""
				className="h-96 w-96 self-end -me-10 -mt-10 lg:m-auto"
			/>
		</div>
	);
};

export default Hero;
