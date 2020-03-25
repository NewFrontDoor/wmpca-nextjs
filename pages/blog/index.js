import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Styled} from 'theme-ui';
import {Blog as BlogBody} from '@newfrontdoor/blog';
import Header from '../../components/header/header';
import {fetchQuery} from '../../lib/sanity';
import MainImage from '../../components/main-image';
import Layout from '../../components/layout';
import BlockText from '../../components/block-text-serializer';
import BasicLink from 'next/link';
import {blocksToText} from '../../lib/sanity-fns';
import {
  pageQuery,
  menuQuery,
  blogPageQuery,
  blogSearchQuery
} from '../../lib/queries';
import { withEmotionCache } from '@emotion/core';

const Link = ({link, data, children}) => {
  return (
    <BasicLink
      passHref
      href={`/blog?search=${link}`}
      as={`/blog?search=${data?.slug?.current || link}`}
    >
      <Styled.a>{children}</Styled.a>
    </BasicLink>
  );
};

const Blog = ({mainData, menuData, blogPosts}) => {
  const {content, title, mainImage} = mainData;

  return (
    <Layout menuItems={menuData.menuitems} footer={menuData.footer}>
      <Grid gap={20}>
        <Header heading={title} />
        {mainImage && <MainImage mainImage={mainImage} />}
        <BlockText blocks={content} />
        <BlogBody
          dateFormat="EEEE, MMMM do yyyy"
          posts={blogPosts}
          overrides={{
            paddingTop: 0,
            height: 'fit-content',
            maxHeight: '500px',
            top: '20px',
            fontFamily: 'body',
            lineHeight: 1
          }}
          Link={Link}
          blockText={content => <BlockText blocks={content} />}
          bodyTransform={body => blocksToText(body)}
        />
      </Grid>
    </Layout>
  );
};

Blog.propTypes = {
  mainData: PropTypes.shape({
    content: PropTypes.array,
    title: PropTypes.string,
    mainImage: PropTypes.string
  }).isRequired,
  menuData: PropTypes.object.isRequired,
  blogPosts: PropTypes.array.isRequired
};

Blog.getInitialProps = async ({query}) => {
  const blogs = query.search ? blogSearchQuery(query.search) : blogPageQuery;
  const results = await fetchQuery(`
    {
      "mainData": ${pageQuery('blog')},
      "menuData": ${menuQuery},
      "blogPosts": ${blogs}
    }
    `);
  return results;
};

export default Blog;
