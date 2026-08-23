import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { ThemeUIStyleObject } from "theme-ui";

// Hrefs that Next's router should not own: absolute/protocol-relative URLs,
// mailto/tel, Windows paths, and the API routes.
const isExternal = (href: string) =>
	/^(?:www\.|(?:https?|ftps?):\/\/|mailto:|tel:|[A-Za-z]:\\|\/\/|\/?api(?:\/|$))/.test(href);

type LinkProps = {
	href: string;
	children?: ReactNode;
	isBlank?: boolean;
	sx?: ThemeUIStyleObject;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

const Link = ({ href, children, isBlank, sx, ...rest }: LinkProps) => {
	const styles: ThemeUIStyleObject = { variant: "styles.a", ...sx };
	const target = isBlank ? { target: "_blank", rel: "noreferrer noopener" } : {};

	if (isExternal(href)) {
		return (
			<a href={href} sx={styles} {...target} {...rest}>
				{children}
			</a>
		);
	}

	// Sanity returns bare slugs (`'link': slug.current`), so make them root-relative.
	const internalHref = href.startsWith("/") || href.startsWith("#") ? href : `/${href}`;

	return (
		<NextLink href={internalHref} sx={styles} {...target} {...rest}>
			{children}
		</NextLink>
	);
};

export default Link;
