import PropTypes from "prop-types";
import React from "react";
import { Text, jsx } from "theme-ui";
import Link from "next/link";
import Logo from "./logo";
import Menu from "./menu";

const SideBar = ({ menuItems }) => {
	return (
		<nav
			sx={{
				gridArea: ["initial", "sidebar"],
				height: [null, "80vh"],
				display: "block",
				position: [null, "sticky"],
				top: [null, "28px"],
				marginTop: [null, "28px"],
				marginBottom: ["100px", null, null],
			}}
		>
			<Logo />
			<Menu menuItems={menuItems} />
			{process.env.NODE_ENV !== "production" && (
				<Text
					as="ul"
					variant="menuUl"
					sx={{ display: ["none", "block"], mt: "20px", opacity: 0.6 }}
				>
					<li>
						<Link href="/audio-test">Audio test</Link>
					</li>
				</Text>
			)}
		</nav>
	);
};

SideBar.propTypes = {
	menuItems: PropTypes.arrayOf(PropTypes.object),
};

export default SideBar;
