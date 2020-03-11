import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import urlFor from '../lib/sanityImg';

const ImageWrapper = styled.div`
  max-height: 400px;
  margin-bottom: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  img {
  }
`;

const MainImage = ({mainImage}) => {
  return (
    <ImageWrapper>
      <img
        src={urlFor(mainImage)}
        alt=""
        style={{maxWidth: '100%', height: 'auto', maxHeight: '400px'}}
      />
    </ImageWrapper>
  );
};

MainImage.propTypes = {
  mainImage: PropTypes.object.isRequired
};

export default MainImage;
