import React from "react";      
import { Link } from "react-router-dom";


const ContactIcons = () => {
	return (
		<div className="flex gap-3 text-black">
			<Link
				to={"https://www.instagram.com/scribblesolutionsfl/"}
				target="_blank"
			>
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/o4joi16zmpqkh75cmcbt"
					alt=""
				/>
			</Link>
			<Link to={"https://wa.me/16892411744"} target="_blank">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/n9tsv1zw0fcgrbptav2v"
					alt=""
				/>
			</Link>
			<Link to={"https://www.youtube.com"} target="_blank">
				<img
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/ejx0jgdsyxoipenqlain"
					alt=""
				/>
			</Link>
		</div>
	);
};

export default ContactIcons;
