import PropTypes from "prop-types";
import React from "react";
import NextLink from "next/link";
import { Link as ThemeUiLink } from "theme-ui";

const Link = ({ link = "", children, isBlank, hasNoAnchor, passedSx, ...rest }) => {
	<NextLink href={`/${link}`} sx={passedSx}>
			{children}
	</NextLink>
};

Link.propTypes = {
	children: PropTypes.any,
	variant: PropTypes.string,
	link: PropTypes.string.isRequired,
	isBlank: PropTypes.bool,
	hasNoAnchor: PropTypes.bool,
	passedSx: PropTypes.object
};

export default Link;
