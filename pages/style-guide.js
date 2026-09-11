import React from "react";
import { Styled } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
const StyleGuide = (props) => (
	<>
		<h1 sx={{ variant: "styles.h1" }}>Style Guide</h1>
		<ColorPalette />
		<TypeScale />
		<TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading" />
		<TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
	</>
);

export default StyleGuide;
