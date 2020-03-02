import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Form from '../components/form';
import getVideoId from 'get-video-id';
import Vimeo from '@u-wave/react-vimeo';
import Youtube from '@u-wave/react-youtube';
import AudioPlayer from 'react-audio-player'

const InternalLinkSerializer = props => {
  return <Link href={props.mark.slug}>{props.children}</Link>;
};

function FormSerializer({node: {header, id, body, fields}}) {
  return <Form header={header} id={id} description={body} fields={fields} />;
}



const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    form: FormSerializer
  },
  marks: {
    internalLink: InternalLinkSerializer,
  }
}

export default function SanityBlock({blocks}) {
  return <BlockContent blocks={blocks} serializers={serializers}/>;
}

SanityBlock.propTypes = {
  blocks: PropTypes.object.isRequired
};