/** @jsx jsx */
import React from 'react';
import {jsx, Grid} from 'theme-ui';
import PropTypes from 'prop-types';

import Sidebar from './sidebar/sidebar';
import FooterIcons from './footer/footer-icons';
import Footer from './footer/footer';
import FooterBox from './footer/footer-box';
// Import ActionBlock from './action-block';

const Layout = ({menuItems, children}) => (
  <>
    <Grid
      gap={[0, '30px']}
      columns={[1, '170px 1fr']}
      sx={{
        margin: 'auto',
        maxWidth: '1200px',
        gridTemplateAreas: ['unset', "'sidebar header' 'sidebar main'"]
      }}
    >
      <Sidebar img menuItems={menuItems} />
      {children}
    </Grid>

    <Footer
      subtext={`© WOMENS MINISTRY IN THE PRESBYTERIAN CHURCH OF AUSTRALIA ${new Date().getFullYear()}. IN PARTNERSHIP WITH NEW FRONT DOOR`}
    >
      <FooterBox area="sidebar-a">
        <p />
      </FooterBox>
      <FooterBox area="primary">
        <FooterIcons
          social={[
            {type: 'facebook', url: 'https://www.facebook.com/wmpres/'},
            {type: 'login', url: 'https://wmpca.sanity.studio/'}
          ]}
        />
      </FooterBox>
      <FooterBox area="sidebar-b">
        <p />
      </FooterBox>
      <FooterBox area="tertiary">
        <p />
      </FooterBox>
    </Footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.any,
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

export default Layout;
