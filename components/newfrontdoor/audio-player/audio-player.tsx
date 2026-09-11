import {FC} from 'react';
import PropTypes from 'prop-types';

import {AudioManager} from './audio-manager';
import StyledPlayer, {StyledPlayerProps} from './styled-player';

type AudioPlayerProps = {
  src?: string;
  isPlayOnLoad?: boolean;
} & StyledPlayerProps;

const AudioPlayer: FC<AudioPlayerProps> = ({src, isPlayOnLoad = false, ...props}) => {
  return (
    <AudioManager isPlayOnLoad={isPlayOnLoad} initialSrc={src}>
      <StyledPlayer {...props} />
    </AudioManager>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string,
  isPlayOnLoad: PropTypes.bool
};

export default AudioPlayer;
