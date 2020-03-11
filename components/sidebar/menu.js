import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import Link from '../link';

const SelectMenu = styled.select`
  display: block;
  margin: auto;
  margin-top: 10px;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Core = styled.ul`
  margin: 0;
  padding: 0;
  display: none;
  width: 160px;

  li {
    list-style: none;
    position: relative;
    margin: 0;
  }

  li:hover {
    ul {
      display: block;
    }
  }

  li li a.active {
    color: #edb512;
  }

  li a {
    color: #333;
    padding: 15px 15px 15px 15px;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    display: block;
  }

  li a:hover {
    background: whitesmoke;
    color: #edb512;
  }

  li.first {
    margin-left: 0;
    border-left: none;
  }

  ul {
    padding: 0;
    position: absolute;
    background-color: whitesmoke;
    top: 2px;
    left: 145px;
    z-index: 1000;
    display: none;
    width: 170px;
    border-top: 2px solid #3f1404;
  }

  ul li {
    padding: 7px;
    margin: 0;
    border-left: none;
    border-bottom: 1px solid #ececec;
  }

  ul li a {
    font-size: 13px;
    text-transform: none;
    color: #333;
    padding: 0 15px;
  }

  ul li a:hover {
    background: transparent;
    color: #edb512;
  }

  ul ul {
    z-index: 1001;
    margin: 0;
    left: 14.15em;
    top: -2px;
  }

  @media (min-width: 640px) {
    display: block;
  }
`;

const Menu = ({menuItems}) => {
  return (
    <>
      <Core>
        {menuItems.map(item => {
          const {childpages, text} = item;
          return (
            <li key={childpages[0].pathname + 'root'}>
              <Link link={childpages[0].slug.current}>
                {text}
                {item.children && ' »'}
              </Link>
              {childpages > 0 && (
                <ul>
                  {childpages.map(child => {
                    return (
                      <li key={child.slug.current + 'child'}>
                        <Link link={child.slug.current}>{child.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </Core>
      <SelectMenu name="menu" id="menu-select">
        <option value="">--Please choose an option--</option>
        {menuItems.map(item => {
          const {childpages, text} = item;
          return (
            <React.Fragment key={text}>
              <option value={childpages[0].slug.current}>
                {childpages > 0 ? text + ' »' : text}
              </option>
              {childpages > 0 &&
                childpages.map(child => {
                  return (
                    <option value={child.slug.current}>– {child.title}</option>
                  );
                })}
            </React.Fragment>
          );
        })}
      </SelectMenu>
    </>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object)
};

export default Menu;
