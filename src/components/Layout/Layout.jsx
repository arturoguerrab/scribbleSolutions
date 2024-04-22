import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Link to={"https://wa.me/16892411744"} target="_blank">
				<img
					className={
						"fixed z-30 bottom-7 right-1 h-[75px] w-[75px] bg-transparent"
					}
					src="https://static.vecteezy.com/system/resources/previews/021/460/383/original/whatsapp-logo-free-png.png"
					alt=""
				/>
			</Link>
			<Footer />
		</div>
	);
};

export default Layout;
