import React from "react";
import Link from "next/link";
import { jsx } from "theme-ui";

const Logo = () => {
	return (
		<Link href="/">
			<div sx={{ width: "150px", height: "150px", m: "auto", mb: [null, "22px"] }}>
				<img src="/logo.svg" alt="Logo" sx={{ width: "100%", height: "100%" }} />
			</div>
		</Link>
	);
};

export default Logo;
