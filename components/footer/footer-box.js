/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import {jsx, Box} from 'theme-ui';

const FooterBox = ({area, children}) => (
  <Box variant="footer" sx={{gridArea: area}}>
    {children}
  </Box>
);

FooterBox.propTypes = {
  area: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default FooterBox;
