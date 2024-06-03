/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Grid } from "theme-ui";
import PropTypes from "prop-types";
import Sidebar from "./sidebar/sidebar";
import FooterIcons from "./footer/footer-icons";
import Footer from "./footer/footer";
import FooterBox from "./footer/footer-box";
// Import ActionBlock from './action-block';

const Layout = ({ menuItems, children, footer }) => (
	<>
		<Grid
			gap={[0, "30px"]}
			columns={[1, "170px 1fr"]}
			sx={{
				margin: "auto",
				maxWidth: "1200px",
				gridTemplateAreas: ["unset", "'sidebar header' 'sidebar main'"]
			}}
		>
			<Sidebar menuItems={menuItems} />
			{children}
		</Grid>

		<Footer subtext={footer.copyright}>
			<FooterBox area="sidebar-a">
				<p />
			</FooterBox>
			<FooterBox area="primary">
				<FooterIcons social={footer.social} />
			</FooterBox>
			<FooterBox area="sidebar-b">
				<p />
			</FooterBox>
			<FooterBox area="tertiary">
				<p />
			</FooterBox>
		</Footer>
	</>
);

Layout.propTypes = {
	children: PropTypes.any,
	menuItems: PropTypes.arrayOf(PropTypes.object),
	footer: PropTypes.shape({
		copyright: PropTypes.string.isRequired,
		social: PropTypes.arrayOf(PropTypes.object).isRequired
	}).isRequired
};

export default Layout;
