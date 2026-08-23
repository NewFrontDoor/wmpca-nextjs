import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import { jsx, Box } from "theme-ui";
import urlFor from "../lib/sanityImg";
import { Form, validation } from "./newfrontdoor/form";
import getVideoId from "get-video-id";
import Vimeo from "@u-wave/react-vimeo";
import Youtube from "@u-wave/react-youtube";
import { AudioPlayer } from "./newfrontdoor/audio-player";
import Link from "next/link";
import { submitForm } from "../lib/sanity-fns";

type AudioSerializer = {
	node: PropTypes.object.isRequired
};

const AudioSerializer = ({ node }: AudioSerializer) => {
	return <AudioPlayer src={node.url} isInvert={false} width="300px" />;
};


type VideoSerializer = {
	node: PropTypes.object.isRequired
};

const VideoSerializer = ({ node }: VideoSerializer) => {
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

type CustomStyleSerializer = {
	children: string;
}

const CustomStyleSerializer = ({ children }: CustomStyleSerializer) => {
	return <p sx={{ variant: "styles.p" }}>{children}</p>;
};

type AnchorSerializer = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.object.isRequired
}

const AnchorSerializer = ({ children, mark }: AnchorSerializer) => {
	return <span id={mark.id}>{children}</span>;
};

type ImageSerializer = {
	node: PropTypes.node.isRequired
};

const ImageSerializer = ({ node }: ImageSerializer) => {
	return <img src={urlFor(node).url() || ""} alt="" />;
};


const Success = (node) => (
	<Box as="form" id={node.id}>
		<fieldset>
			<p  sx={{ variant: "styles.p" }}>
				{node.onSuccess || "Thank you for your submission. We will get back to you as soon as we can."}
			</p>
		</fieldset>
	</Box>
);

type FormSerializer = {
	node: PropTypes.object.isRequired
};

const FormSerializer = ({ node }: FormSerializer) => {
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


const InternalLinkSerializer = ({ mark, children }) => {
	return (
		<Link href={mark.slug || ""}  sx={{ variant: "styles.a" }}>
			{children}
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
	<Link href={mark.href} target="_blank" rel="noopener noreferrer"  sx={{ variant: "styles.a" }}>
		{children}
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
		<Link href={mark.url} passHref target="_blank" rel="noopener noreferrer"  sx={{ variant: "styles.a" }}>
			{children}
		</Link>
	);
};

FileLinkSerializer.propTypes = {
	children: PropTypes.array.isRequired,
	mark: PropTypes.shape({
		url: PropTypes.string
	}).isRequired
};

type BlockRenderer = {
	children: PropTypes.any,
	node: PropTypes.object.isRequired
};

const BlockRenderer = (props: BlockRenderer) => {
	const style = props.node.style || "normal";

	const elements = {
		h1: <h1 sx={{ variant: "styles.h1" }}>{props.children}</h1>,
		h2: <h2 sx={{ variant: "styles.h2" }}>{props.children}</h2>,
		h3: <h3 sx={{ variant: "styles.h3" }}>{props.children}</h3>,
		h4: <h4 sx={{ variant: "styles.h4" }}>{props.children}</h4>,
		h5: <h5 sx={{ variant: "styles.h5" }}>{props.children}</h5>,
		h6: <h6 sx={{ variant: "styles.h6" }}>{props.children}</h6>
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

type BlockText = {
	blocks: PropTypes.array.isRequired
};

const BlockText = ({ blocks }: BlockText) => {
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


export default BlockText;
