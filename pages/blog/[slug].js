import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'theme-ui';
import {PostPage} from '../../components/newfrontdoor/blog';
import Header from '../../components/header/header';
import {fetchQuery} from '../../lib/sanity';
import MainImage from '../../components/main-image';
import Layout from '../../components/layout';
import BlockText from '../../components/block-text-serializer';
import Link from '../../components/link';
import {menuQuery, blogPostQuery} from '../../lib/queries';

const Blog = ({mainData, menuData}) => {
  const {title, mainImage} = mainData;

  return (
    <Layout menuItems={menuData.menuitems} footer={menuData.footer}>
      <Grid gap={20}>
        <Header heading={title} />
        {mainImage && <MainImage mainImage={mainImage} />}
        <PostPage
          post={mainData}
          link={category => (
            <Link href={`/blog?search=${category._id}`}>{category.title}</Link>
          )}
          blockText={content => <BlockText blocks={content} />}
        />
      </Grid>
    </Layout>
  );
};

Blog.propTypes = {
  mainData: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired
};

Blog.getInitialProps = async ({query}) => {
  const results = await fetchQuery(`
    {
      "mainData": ${blogPostQuery(query.slug)},
      "menuData": ${menuQuery}
    }
    `);
  return results;
};

export default Blog;
