import React from "react";

const Steps = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 py-20 lg:gap-16 max-w-6xl w-full ">
			<div className="text-center">
				<h2 className="text-2xl lg:text-4xl font-bold">How it works?</h2>
				<span className="lg:text-lg">
					In four simple steps you can get your idea
				</span>
			</div>
			<div className="flex gap-12 flex-wrap">
				<div className="flex flex-col gap-1 w-2/4 lg:w-auto justify-center items-center">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/ys8n3e2agpzmwwolxto6"
						alt=""
                        className="h-20 w-24 lg:h-40 lg:w-44"
					/>
					<p className="font-bold lg:text-2xl text-blue-300">Step 1</p>
					<span className="text-center text-sm lg:text-lg ">Contactanos y <br /> asesoria</span>
				</div>
                <div className="flex flex-col gap-1 justify-center items-center">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nod0mh4uf42aamjozzcx"
						alt=""
                        className="h-20 w-24 lg:h-40 lg:w-44"
					/>
					<p className="font-bold lg:text-2xl text-purple-300">Step 2</p>
					<span className="text-center text-sm lg:text-lg ">Contactanos y <br /> asesoria</span>
				</div>
                <div className="flex flex-col gap-1 justify-center items-center w-2/4 lg:w-auto">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/nj9ol16kuhwa40tlgkfj"
						alt=""
                        className="h-20 w-24 lg:h-40 lg:w-44"
					/>
					<p className="font-bold lg:text-2xl text-yellow-300">Step 3</p>
					<span className="text-center text-sm lg:text-lg ">Contactanos y <br /> asesoria</span>
				</div>
                <div className="flex flex-col gap-1 justify-center items-center">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/a7n7x7xdq03yfovnjsaf"
						alt=""
                        className="h-20 w-24 lg:h-40 lg:w-44"
					/>
					<p className="font-bold lg:text-2xl">Step 4</p>
					<span className="text-center text-sm lg:text-lg ">Contactanos y <br /> asesoria</span>
				</div>
			</div>
		</div>
	);
};

export default Steps;
