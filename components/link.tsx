import NextLink from "next/link";
type Link = {
	children: any,
	variant: String,
	href: Required<URL>,
	isBlank: Boolean,
	hasNoAnchor: Boolean,
};

const Link = ({ href, children, ...rest }: Link) => {
	<NextLink href={href} sx={{ variant: "styles.a"}} {...rest}>
		{children}
	</NextLink>
};

export default Link;
