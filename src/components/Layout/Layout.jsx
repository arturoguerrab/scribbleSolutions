import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div className="w-screen">
			<Header />
			<div className="pt-11">{children}</div>
			<Link to={"https://wa.me/16892411744"} target="_blank">
				<img
					className={"fixed z-30 bottom-7 right-5 h-10 w-10 "}
					src="https://res.cloudinary.com/dbwomkmnq/image/upload/f_auto,q_auto/v1/Scribble/ebmcodfyskxkjmdlrsr3"
					alt=""
				/>
			</Link>
			<Footer />
		</div>
	);
};

export default Layout;
