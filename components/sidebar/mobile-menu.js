/** @jsxRuntime classic */
/** @jsx jsx */
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import React from "react";
import { jsx } from "theme-ui";

const Mobile = ({ menuItems }) => {
	const router = useRouter();

	const onSelectChange = (e) => {
		const slug = e.target.value;
		router.push(slug);
	};
	return (
		<select
			sx={{ display: ["block", "none"], margin: "10px auto" }}
			name="menu"
			id="menu-select"
			onChange={(e) => onSelectChange(e)}
		>
			<option value="">--Please choose an option--</option>
			{menuItems.map((item) => (
				<React.Fragment key={item.text}>
					<option value={item.childpages[0].slug.current}>{item.childpages > 0 ? item.text + " »" : item.text}</option>
					{item.childpages > 0 &&
						item.childpages.map((child) => {
							return (
								<option key={child.slug.current} value={child.slug.current}>
									– {child.title}
								</option>
							);
						})}
				</React.Fragment>
			))}
		</select>
	);
};

Mobile.propTypes = {
	menuItems: PropTypes.array.isRequired
};

export default Mobile;
