import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListIcon from "@mui/icons-material/List";

import { Divider } from "@mui/material";

import NavItem from "../Navbar/NavItem";
import ContactIcons from "../../Footer/Contact/ContactIcons";

const SideBar = () => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 , display:"flex" , flexDirection:"column" , height:"100%"}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List className="font-semibold text-2xl h-3/4 flex flex-col justify-center">
				<ListItem disablePadding>
					<ListItemButton sx={{p:0}}>
						<NavItem nombre={"Home"} to={"/"} className={"w-full ps-4 py-2"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton sx={{p:0}}>
						<NavItem nombre={"About"} to={"/about"} className={"w-full ps-4 py-2"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton sx={{p:0}}>
						<NavItem nombre={"Gallery"} to={"/gallery"} className={"w-full ps-4 py-2"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{p:0}}>
						<NavItem nombre={"Pricing"} to={"/pricing"} className={"w-full ps-4 py-2"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton sx={{p:0}}>
						<NavItem nombre={"Contact"} to={"/contact"} className={"w-full ps-4 py-2"} />
					</ListItemButton>
				</ListItem>
			</List>
			<div className="flex flex-col text-sm text-gray-6 00 h-1/4 justify-center ps-4 py-2">
				<ContactIcons />
				<span className="pt-3">Scribble Solutions FL</span>
				<span>All rights reserved</span>
			</div>
		</Box>
	);

	return (
		<div className="lg:hidden">
			<React.Fragment key={"left"}>
				<Button onClick={toggleDrawer("left", true)}>
					<ListIcon fontSize="large" color="action" />
				</Button>
				<Drawer
					anchor={"left"}
					open={state["left"]}
					onClose={toggleDrawer("left", false)}
				>
					{list("left")}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default SideBar;
