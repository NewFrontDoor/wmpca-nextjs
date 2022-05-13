/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import Link from "../link";
import { jsx, Text } from "theme-ui";

const Breadcrumbs = ({ breadcrumbs }) => {
	return (
		<div sx={{ m: "-2px 0px" }}>
			<Text as="h3" variant="breadcrumb">
				{breadcrumbs.map((crumb) => {
					return (
						<Link
							key={crumb.title}
							passedSx={{ m: "-3px 5px -1px 0" }}
							link={crumb.link}
						>
							{crumb.title} ←{" "}
						</Link>
					);
				})}
			</Text>
		</div>
	);
};

Breadcrumbs.propTypes = {
	breadcrumbs: PropTypes.array.isRequired,
};

export default Breadcrumbs;
