/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link';
import {jsx} from 'theme-ui';

const Breadcrumbs = ({breadcrumbs}) => {
  return (
    <div
      sx={{m: '-2px 0px', fontSize: '24px', color: 'text', textAlign: 'center'}}
    >
      <h3>
        {breadcrumbs.map(crumb => {
          return (
            <Link
              key={crumb.title}
              passedSx={{m: '-3px 5px -1px 0'}}
              link={crumb.link}
            >
              {crumb.title} ←{' '}
            </Link>
          );
        })}
      </h3>
    </div>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
};

export default Breadcrumbs;
