import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '@newfrontdoor/carousel';
import styled from '@emotion/styled';
import Contact from '../templates/contact';
import Panels from '../components/panels';
import Portfolio from '../components/portfolio';
import Header from '../components/header/header';
import BlockText from '../components/block-text-serializer';
import Layout from '../components/layout';
import {fetchQuery} from '../lib/sanity';
import {mainQuery, menuQuery} from '../lib/queries';
import urlFor from '../lib/sanityImg';

const Slide = styled.img`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Home = ({mainData, menuData}) => {
  const {heading, images, welcome} = mainData;
  return (
    <Layout menuItems={menuData.menuitems}>
      <Grid>
        <Header heading={heading} />
        {images && (
          <Carousel style={{height: '400px'}}>
            {images.map(slide => (
              <Slide key={slide._key} src={urlFor(slide)} />
            ))}
          </Carousel>
        )}
        {/*{panels && <Panels />}

        {portfolio && <Portfolio portfolio={portfolio} />}
        {contact && <Contact map={contact.map} contact={contact.content} />}*/}
        {welcome && <BlockText blocks={welcome} />}
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

/*
Export default function FrontPage({
  heading,
  panels,
  portfolio,
  contact,
  slides,
  welcome
}) {
  return (
    <Grid>
      <Header heading={heading} />
      

      
    </Grid>
  );
}
*/
