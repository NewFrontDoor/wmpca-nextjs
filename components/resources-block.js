/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Link from "./link";

const ResourcesBlock = () => {
	return (
		<div sx={{ minHeight: "300px" }}>
			<ul sx={{ listStyle: "none" }}>
				<li>
					<Link link="/connect">Connect & Network</Link>
				</li>
			</ul>
		</div>
	);
};
export default ResourcesBlock;
