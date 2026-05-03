import React from "react";
import { Text, jsx } from "theme-ui";
import PropTypes from "prop-types";
import Link from "next/link";
import Mobile from "./mobile-menu";

const Menu = ({ menuItems }) => {
	return (
		<>
			<Text as="ul" variant="menuUl" sx={{ display: ["none", "block"] }}>
				{menuItems.map((item) => (
					<li key={item.childpages[0]?.pathname + "root"}>
						<Link href={item.childpages[0].slug.current} passHref>
							{item.text}
							{item.children && " »"}
						</Link>
						{item.childpages > 0 && (
							<ul>
								{item.childpages.map((child) => {
									return (
										<li key={child.slug.current + "child"}>
											<Link href={child.slug.current} passHref>
												{child.text}
											</Link>
										</li>
									);
								})}
							</ul>
						)}
					</li>
				))}
			</Text>
			<Mobile menuItems={menuItems} />
		</>
	);
};

Menu.propTypes = {
	menuItems: PropTypes.arrayOf(PropTypes.object)
};

export default Menu;
