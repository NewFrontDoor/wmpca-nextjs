/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { Flex, Styled, jsx } from "theme-ui";
import { NavButton as Button } from "./sidebar/nav-button";
import Link from "./link";

const ActionBlock = ({ heading, content, action, url }) => {
	return (
		<Flex sx={{ flexDirection: "column" }}>
			<Styled.h4>{heading}</Styled.h4>
			<p>
				{Array.isArray(content)
					? content.map((line) => (
							<span key={line}>
								{line}
								<br />
							</span>
					  ))
					: content}
			</p>
			{action && (
				<Button sx={{ alignSelf: "flex-end" }} to={action.to}>
					{action.text}
				</Button>
			)}
			{url && <Link link={url.href}>{url.text}</Link>}
		</Flex>
	);
};

ActionBlock.propTypes = {
	action: PropTypes.object,
	content: PropTypes.any,
	heading: PropTypes.string.isRequired,
	url: PropTypes.object,
};

export default ActionBlock;
