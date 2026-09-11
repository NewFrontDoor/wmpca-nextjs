/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types';
import {Flex, jsx} from 'theme-ui';
import format from 'date-fns/format';

const PostPage = ({post, pageBody, dateFormat = 'EEEE, MMMM do yyyy', link, blockText}) => {
  const {title, author, _createdAt, categories, date, body} = post;
  return (
    <Flex
      sx={{
        flexFlow: 'row wrap',
        margin: 'auto',
        width: '100vw',
        maxWidth: '920px',
        paddingTop: '40px',
        minHeight: [null, '600px'],
        justifyContent: 'space-between',
      }}
    >
      <h2>{title}</h2>
      <div>
        <large>by {author?.name || "WMPCA"}</large><br />
        <small>Posted on {format(new Date(_createdAt), dateFormat)}</small>
        {categories?.length > 0 && (
          <small sx={{display: ['none', 'block']}}>
            <ul>
              {categories.map((category) => (
                <li key={category.title + date}>{link(category)}</li>
              ))}
            </ul>
          </small>
        )}
      </div>
      <div
        sx={{
          flex: '1 0 auto',
          width: 'auto',
          maxWidth: ['100%'],
          paddingTop: [null, '23.5px']
        }}
      >
        {blockText(pageBody || body)}
      </div>
    </Flex>
  );
};

PostPage.propTypes = {
  dateFormat: PropTypes.string,
  link: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.shape({name: PropTypes.string}),
    _createdAt: PropTypes.string,
    categories: PropTypes.array,
    date: PropTypes.string,
    body: PropTypes.any
  }).isRequired,
  blockText: PropTypes.func.isRequired
};

export default PostPage;
