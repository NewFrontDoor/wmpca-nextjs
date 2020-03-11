import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/header';
import BlockContent from '@sanity/block-content-to-react';
import {fetchQuery} from '../lib/sanity';
import Form from '../components/form';
import getVideoId from 'get-video-id';
import Vimeo from '@u-wave/react-vimeo';
//import Youtube from 'react-youtube';
import Youtube from '@u-wave/react-youtube';
import AudioPlayer from 'react-audio-player'
import MainImage from '../components/main-image';
import Layout from '../components/layout';
import SanityBlock from '../utils/sanity-block';
import {pageQuery} from '../lib/queries';

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Wrapper = styled.article`
  min-height: 550px;
`;

export default function SanityPage({mainData}) {
  const {body} = mainData;

  return  (
    <Layout>
      <Grid>
        <Header heading={['Page1']} />
        <SanityBlock blocks={body} />
      </Grid>
    </Layout>
      
  ) ;
}

SanityPage.propTypes = {
    mainData: PropTypes.array.isRequired 
};

SanityPage.getInitialProps = async ({query}) => {
    const results = await fetchQuery(`
    {
      "mainData": ${pageQuery(query.slug)}
    }
    `);
    return results;
  };