import React from "react";
import { Grid } from "theme-ui";
import BlockText from "../components/block-text-serializer";

// Scratch page for checking the audioEmbed serializer renders. The dataset has
// no audioEmbed blocks yet, so this feeds BlockText a hand-written one.
const blocks = [
	{
		_key: "intro",
		_type: "block",
		style: "h2",
		children: [{ _key: "intro-span", _type: "span", marks: [], text: "Audio block" }],
		markDefs: []
	},
	{
		_key: "copy",
		_type: "block",
		style: "normal",
		children: [
			{
				_key: "copy-span",
				_type: "span",
				marks: [],
				text: "Below is an audioEmbed block rendered through BlockText."
			}
		],
		markDefs: []
	},
	{
		_key: "audio",
		_type: "audioEmbed",
		url: "/sample-audio.wav"
	}
];

// Dev-only scratch route: 404s in production builds.
export function getStaticProps() {
	if (process.env.NODE_ENV === "production") {
		return { notFound: true };
	}

	return { props: {} };
}

export default function AudioTest() {
	return (
		<Grid gap={20} sx={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
			<BlockText blocks={blocks} />
		</Grid>
	);
}
