/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { Text, jsx } from "theme-ui";
import Breadcrumbs from "./breadcrumbs";
import Head from "next/head";

const Header = ({ heading, breadcrumbs }) => {
	return (
		<header
			sx={{
				padding: "10px 20px",
				background: "#333",
				backgroundImage: "url('/backgrounds/office.png')",
				margin: [null, "20px 0px"],
			}}
		>
			<Head>
				<title>WMPCA - {heading}</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#2d89ef" />
				<meta
					name="msapplication-config"
					content="/favicons/browserconfig.xml"
				/>
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Text as="h1" variant="pageheading">
				{heading}
			</Text>
			{breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
		</header>
	);
};

Header.propTypes = {
	breadcrumbs: PropTypes.array,
	heading: PropTypes.string,
};

export default Header;
