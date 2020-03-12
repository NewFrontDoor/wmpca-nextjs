import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import Logo from './logo';
import Menu from './menu';

const VertNav = styled.div`
  grid-area: initial;
  @media (min-width: 640px) {
    z-index: 2000;
    height: 80vh;
    display: block;
    grid-area: sidebar;
  }
  @media (min-width: 640px) and (min-height: 500px) {
    position: sticky;
    top: 28px;
    margin-top: 28px;
  }
`;

const SideBar = ({img, menuItems}) => {
  return (
    <VertNav>
      <Logo img={img} />
      <Menu menuItems={menuItems} />
    </VertNav>
  );
};

SideBar.propTypes = {
  img: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

export default SideBar;
