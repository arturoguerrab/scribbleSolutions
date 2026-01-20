import React from "react";

const Machines = () => {
	return (
		<div className="h-48 w-32 lg:h-96 lg:w-72 bg-gray-200 rounded-2xl">
			<div className="bg-purple-200 h-1/3 rounded-t-2xl">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/ijecsvvjzc5fjar4yzvo"
					alt=""
                    className="-ms-6 h-20 lg:h-auto lg:-ms-8"
				/>
			</div>
            <div className="py-6 px-3 text-xs flex flex-col gap-2 font-light">
                <h3 className="font-bold">Laser Cutting</h3>
                <p>Enviamos el presupuesto y el primer boceto </p>
                <span>Lorem: 4535</span>
            </div>
		</div>
	);
};

export default Machines;
