/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import Link from "next/link";
import { ReactComponent as LogoImg } from "../../public/logo.svg";
import { jsx } from "theme-ui";

const Logo = () => {
	return (
		<Link href="/" passHref>
			<div sx={{ width: "150px", height: "150px", m: "auto", mb: [null, "22px"] }}>
				<LogoImg />
			</div>
		</Link>
	);
};

export default Logo;
