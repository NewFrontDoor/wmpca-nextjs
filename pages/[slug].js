import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/header';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../lib/sanity';
import Form from '../components/form';
import getVideoId from 'get-video-id';
import Vimeo from '@u-wave/react-vimeo';
//import Youtube from 'react-youtube';
import Youtube from '@u-wave/react-youtube';
import AudioPlayer from 'react-audio-player'
import MainImage from '../components/main-image';
import Layout from '../components/layout';
import SanityBlock from '../utils/sanity-block';

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Wrapper = styled.article`
  min-height: 550px;
`;

export default function SanityPage({mainData}) {
  return  (
    <Layout>
      <Grid>
        <Header heading={['Page1']} />
        <SanityBlock blocks={mainData[0].content} />
      </Grid>
    </Layout>
      
  ) ;
}

SanityPage.propTypes = {
    mainData: PropTypes.array.isRequired 
};

SanityPage.getInitialProps = async ({query}) => {
    const pageQuery = `
      *[_type == "page" && slug.current match '${query.slug}']{
        ...,
          content[]{
            ...,
            _type == 'reference' => @-> {
              ...,
              blocks[] {
                ...,
                _type == 'reference' => @ ->
              }
            },
            markDefs[] {
              ...,
              _type == 'internalLink' => {
                  'slug': @.reference->slug.current
              }
            },
          asset->
          },
          mainImage{
            asset->
          },
          'id': _id,
        'pathname': '/' + slug.current
      }
    `;
    
    const results = await sanity.fetch(pageQuery);
    console.log(results)
    return {mainData: results};
  };