import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'theme-ui';
import Header from '../components/header/header';
import {fetchQuery} from '../lib/sanity';
import MainImage from '../components/main-image';
import Layout from '../components/layout';
import BlockText from '../components/block-text-serializer';
import {pageQuery, menuQuery} from '../lib/queries';

const Page = ({mainData, menuData}) => {
  const {content, title, mainImage} = mainData;

  return (
    <Layout menuItems={menuData.menuitems} footer={menuData.footer}>
      <Grid gap={20}>
        <Header heading={title} />
        {mainImage && <MainImage mainImage={mainImage} />}
        <BlockText blocks={content} />
      </Grid>
    </Layout>
  );
};

Page.propTypes = {
  mainData: PropTypes.array.isRequired,
  menuData: PropTypes.array.isRequired
};

Page.getInitialProps = async ({query}) => {
  console.log(query);
  const results = await fetchQuery(`
    {
      "mainData": ${pageQuery(query.slug)},
      "menuData": ${menuQuery}
    }
    `);
  return results;
};

export default Page;
