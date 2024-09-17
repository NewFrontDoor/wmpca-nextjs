/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import { Styled, jsx, Box } from "theme-ui";
import urlFor from "../lib/sanityImg";
import { Form, validation } from "@newfrontdoor/form";
import getVideoId from "get-video-id";
import Vimeo from "@u-wave/react-vimeo";
import Youtube from "@u-wave/react-youtube";
import { StyledPlayer } from "@newfrontdoor/audio-player";
import Link from "next/link";
import { submitForm } from "../lib/sanity-fns";

const AudioSerializer = ({ node }) => {
	return <StyledPlayer audio={node.url} isInvert={false} width="300px" />;
};

AudioSerializer.propTypes = {
	node: PropTypes.object.isRequired
};

const VideoSerializer = ({ node }) => {
	const { url } = node;
	if (url) {
		const video = getVideoId(url || null);

		if (video.service === "youtube") {
			return <Youtube modestBranding annotations={false} video={video.id} height={360} width={640} />;
		}

		if (video.service === "vimeo") {
			return <Vimeo showTitle={false} showByline={false} video={video.id} />;
		}
	}
};

VideoSerializer.propTypes = {
	node: PropTypes.object.isRequired
};

const CustomStyleSerializer = ({ children }) => {
	return <Styled.p>{children}</Styled.p>;
};

CustomStyleSerializer.propTypes = {
	children: PropTypes.string.isRequired
};

const AnchorSerializer = ({ children, mark }) => {
	return <span id={mark.id}>{children}</span>;
};

AnchorSerializer.propTypes = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.object.isRequired
};

const ImageSerializer = ({ node }) => {
	return <img src={urlFor(node).url() || ""} alt="" />;
};

ImageSerializer.propTypes = {
	node: PropTypes.node.isRequired
};

const Success = (node) => (
	<Box as="form" id={node.id}>
		<fieldset>
			<Styled.p>
				{node.onSuccess || "Thank you for your submission. We will get back to you as soon as we can."}
			</Styled.p>
		</fieldset>
	</Box>
);

const FormSerializer = ({ node }) => {
	return (
		<Form
			{...node}
			validationFn={(values) => validation(values, node)}
			blockText={(val) => <BlockText blocks={val} />}
			submitForm={(values) => submitForm(values, node.id)}
			success={<Success node={node} />}
		/>
	);
};

FormSerializer.propTypes = {
	node: PropTypes.object.isRequired
};

const InternalLinkSerializer = ({ mark, children }) => {
	return (
		<Link href={mark.slug || ""} passHref>
			<Styled.a>{children}</Styled.a>
		</Link>
	);
};

InternalLinkSerializer.propTypes = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.shape({
		slug: PropTypes.string
	}).isRequired
};

const ExternalLinkSerializer = ({ mark, children }) => (
	<Link href={mark.href} passHref>
		<Styled.a target="_blank" rel="noopener noreferrer">
			{children}
		</Styled.a>
	</Link>
);

ExternalLinkSerializer.propTypes = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.shape({
		href: PropTypes.string
	}).isRequired
};

const FileLinkSerializer = ({ mark, children }) => {
	return (
		<Link href={mark.url} passHref>
			<Styled.a target="_blank" rel="noopener noreferrer">
				{children}
			</Styled.a>
		</Link>
	);
};

FileLinkSerializer.propTypes = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.shape({
		url: PropTypes.string
	}).isRequired
};

const BlockRenderer = (props) => {
	const style = props.node.style || "normal";

	const elements = {
		h1: <Styled.h1>{props.children}</Styled.h1>,
		h2: <Styled.h2>{props.children}</Styled.h2>,
		h3: <Styled.h3>{props.children}</Styled.h3>,
		h4: <Styled.h4>{props.children}</Styled.h4>,
		h5: <Styled.h5>{props.children}</Styled.h5>,
		h6: <Styled.h6>{props.children}</Styled.h6>
	};

	if (/^h\d/.test(style)) {
		return elements[style];
	}

	if (style === "blockquote") {
		return <blockquote>- {props.children}</blockquote>;
	}

	// Fall back to default handling
	return BlockContent.defaultSerializers.types.block(props);
};

BlockRenderer.propTypes = {
	children: PropTypes.any,
	node: PropTypes.object.isRequired
};

const BlockText = ({ blocks }) => {
	return (
		<BlockContent
			blocks={blocks}
			serializers={{
				types: {
					block: BlockRenderer,
					p: CustomStyleSerializer,
					form: FormSerializer,
					image: ImageSerializer,
					audioEmbed: AudioSerializer,
					videoEmbed: VideoSerializer
				},
				marks: {
					anchor: AnchorSerializer,
					internalLink: InternalLinkSerializer,
					link: ExternalLinkSerializer,
					fileLink: FileLinkSerializer
				}
			}}
		/>
	);
};

BlockText.propTypes = {
	blocks: PropTypes.array.isRequired
};

export default BlockText;
