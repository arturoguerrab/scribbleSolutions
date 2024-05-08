import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Costumers = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 py-20 lg:gap-16 max-w-6xl w-full ">
			<div className="text-center">
				<h2 className="text-2xl lg:text-4xl font-bold">
					Our <span className="text-blue-300">ha</span>
					<span className="text-purple-300">pp</span>
					<span className="text-yellow-300">y </span>customers
				</h2>
				<span className="lg:text-lg">
					In four simple steps you can get your idea
				</span>
			</div>
			<div className="w-72 lg:w-80  h-40 lg:h-48 bg-gray-200 rounded-2xl p-6 lg:p-8">
				<div className="flex">
					<img
						src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/l1wjffy3a79j97rgoepb"
						alt=""
					/>
					<div>
						<p>Juan Perez</p>
						<div className="text-yellow-700">
							<StarRoundedIcon />
							<StarRoundedIcon />
							<StarRoundedIcon />
							<StarRoundedIcon />
							<StarRoundedIcon />
						</div>
					</div>
				</div>
				<span className="lg:text-lg">
					“Cheo es el mejor de todos excelente servicio”
				</span>
			</div>
		</div>
	);
};

export default Costumers;
