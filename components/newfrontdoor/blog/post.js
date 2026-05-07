import PropTypes from 'prop-types';
import {Flex, jsx} from 'theme-ui';
import readingTime from 'reading-time';
import DefaultSidebar from './sidebar';

const Post = ({
  body,
  blockText,
  bodyTransform = (props) => props,
  Sidebar = DefaultSidebar,
  ...rest
}) => {
  const readingLength = readingTime(bodyTransform(body));

  return body ? (
    <Flex
      sx={{
        flexFlow: 'row wrap',
        margin: 'auto',
        width: '100vw',
        maxWidth: '920px',
        paddingBottom: '40px',
        minHeight: [null, '600px']
      }}
    >

      <Sidebar {...rest} readingLength={readingLength} />
      <div
        sx={{
          flex: '1 0 auto',
          width: 'auto',
          maxWidth: ['24em', '32em'],
          paddingTop: [null, '23.5px'],
          'img': {
            width: '100%'
          },
        }}
      >
        {blockText(body)}
      </div>
    </Flex>
  ) : <div>empty</div>;
};

Post.propTypes = {
  body: PropTypes.oneOf([PropTypes.array, PropTypes.string]).isRequired,
  blockText: PropTypes.func.isRequired,
  Sidebar: PropTypes.elementType,
  bodyTransform: PropTypes.func
};

export default Post;
