import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'theme-ui';
import {Blog as BlogBody} from '@newfrontdoor/blog';
import Header from '../../components/header/header';
import {fetchQuery} from '../../lib/sanity';
import MainImage from '../../components/main-image';
import Layout from '../../components/layout';
import BlockText from '../../components/block-text-serializer';
import Link from '../../components/link';
import {pageQuery, menuQuery, blogPageQuery} from '../../lib/queries';

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
            fontFamily: 'body'
          }}
          link={data => <Link link={data}>{data}</Link>}
          blockText={content => <BlockText blocks={content} />}
        />
      </Grid>
    </Layout>
  );
};

Blog.propTypes = {
  mainData: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired,
  blogPosts: PropTypes.array.isRequired
};

Blog.getInitialProps = async () => {
  const results = await fetchQuery(`
    {
      "mainData": ${pageQuery('blog')},
      "menuData": ${menuQuery},
      "blogPosts": ${blogPageQuery}
    }
    `);
  return results;
};

export default Blog;
