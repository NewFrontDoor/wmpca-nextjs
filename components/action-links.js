import PropTypes from "prop-types";
import React from 'react';

const ActionLinks = ({links}) => {
  return (
    <ul>
      {links.map(link => {
        return (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

ActionLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ActionLinks;
