/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import {jsx} from 'theme-ui';
import urlFor from '../lib/sanityImg';

const MainImage = ({mainImage}) => {
  return (
    <div sx={{height: '400px'}}>
      <img
        src={urlFor(mainImage)}
        alt=""
        sx={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </div>
  );
};

MainImage.propTypes = {
  mainImage: PropTypes.object.isRequired
};

export default MainImage;
