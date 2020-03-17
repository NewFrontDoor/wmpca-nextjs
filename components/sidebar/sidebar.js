/** @jsx jsx */
import PropTypes from 'prop-types';
import React from 'react';
import {jsx} from 'theme-ui';
import Logo from './logo';
import Menu from './menu';

const SideBar = ({menuItems}) => {
  return (
    <nav
      sx={{
        gridArea: ['initial', 'sidebar'],
        height: [null, '80vh'],
        display: 'block',
        position: [null, 'sticky'],
        top: [null, '28px'],
        marginTop: [null, '28px']
      }}
    >
      <Logo />
      <Menu menuItems={menuItems} />
    </nav>
  );
};

SideBar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

export default SideBar;
