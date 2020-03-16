/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '@newfrontdoor/carousel';
import Contact from '../templates/contact';
import Panels from '../components/panels';
import Portfolio from '../components/portfolio';
import Header from '../components/header/header';
import BlockText from '../components/block-text-serializer';
import Layout from '../components/layout';
import {fetchQuery} from '../lib/sanity';
import {mainQuery, menuQuery} from '../lib/queries';
import urlFor from '../lib/sanityImg';
import {Grid, jsx} from 'theme-ui';

const Home = ({mainData, menuData}) => {
  const {heading, images, welcome} = mainData;
  return (
    <Layout menuItems={menuData.menuitems} footer={menuData.footer}>
      <Grid gap={20}>
        <Header heading={heading} />
        {images && (
          <Carousel style={{height: '400px'}}>
            {images.map(slide => (
              <img key={slide._key} sx={{width: '100%'}} src={urlFor(slide)} />
            ))}
          </Carousel>
        )}
        {/* {panels && <Panels />}

        {portfolio && <Portfolio portfolio={portfolio} />}
        {contact && <Contact map={contact.map} contact={contact.content} />} */}
        <main>{welcome && <BlockText blocks={welcome} />}</main>
      </Grid>
    </Layout>
  );
};

Home.propTypes = {
  mainData: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired
};

export default Home;

Home.getInitialProps = async () => {
  const results = await fetchQuery(
    `{
        "mainData": ${mainQuery},
        "menuData": ${menuQuery}
    }`
  );

  return results;
};
