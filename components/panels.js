import React from "react";
import SectionTitle from "./section-title";

function Panel({ content }) {
	return <div>{content}</div>;
}

export default function Panels({ panels }) {
	return (
		<>
			<SectionTitle text={panels.title} />
			<div className="row">
				<div id="panels">
					{panels.map((panel, idx) => {
						return (
							<div className="span3" key={`panel ${idx}`}>
								<div className="panel_wrap">
									<Panel content={panel.content} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
