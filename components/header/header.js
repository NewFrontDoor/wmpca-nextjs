/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, jsx} from 'theme-ui';
import Breadcrumbs from './breadcrumbs';

const Header = ({heading, breadcrumbs}) => {
  return (
    <header
      sx={{
        padding: '10px 20px',
        background: '#333',
        backgroundImage: "url('/backgrounds/office.png')",
        margin: [null, '20px 0px']
      }}
    >
      <Text as="h1" variant="pageheading">
        {heading}
      </Text>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
    </header>
  );
};

Header.propTypes = {
  breadcrumbs: PropTypes.array,
  heading: PropTypes.string
};

export default Header;
