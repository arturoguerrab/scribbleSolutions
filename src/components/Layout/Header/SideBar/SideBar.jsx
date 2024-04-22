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
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List className="font-semibold">
				<ListItem disablePadding>
					<ListItemButton>
						<NavItem nombre={"Home"} to={"/"} className={"w-full"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton>
						<NavItem nombre={"About"} to={"/about"} className={"w-full"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton>
						<NavItem nombre={"Gallery"} to={"/gallery"} className={"w-full"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<NavItem nombre={"Pricing"} to={"/pricing"} className={"w-full"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<NavItem nombre={"Contact"} to={"/contact"} className={"w-full"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			{/* <ContactContainer/> */}
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
