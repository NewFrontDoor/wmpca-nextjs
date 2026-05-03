/** @jsx jsx */
import React from 'react';
import {jsx, Styled} from 'theme-ui';
import PropTypes from 'prop-types';
import {FaDownload} from 'react-icons/fa';

const SermonTable = ({
  sermons,
  headers,
  titleKey,
  sermonDirectory,
  renderLink,
  passedSx
}) => {
  const desiredColumns = headers
    .map((item) => item.key)
    .filter((word) => word !== titleKey);
  return (
    <table sx={passedSx}>
      <thead>
        <tr>
          {headers.map((column) => (
            <th
              key={column.key}
              sx={{
                display: [column.hideable ? 'none' : 'table-cell', 'table-cell']
              }}
            >
              {column.heading}
            </th>
          ))}
          <th /> {/* This is for the download column */}
        </tr>
      </thead>
      <tbody>
        {sermons.map((sermon) => (
          <tr key={sermon.nid}>
            <td>
              {renderLink(sermonDirectory, sermon.slug, sermon[titleKey])}
            </td>
            {desiredColumns.map((item) => (
              <td
                key={sermon.nid + item}
                sx={{
                  display: [item.hideable ? 'none' : 'table-cell', 'table-cell']
                }}
              >
                {Object.prototype.hasOwnProperty.call(sermon, item) &&
                  sermon[item]}
              </td>
            ))}
            <td>
              <a
                href={sermon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

SermonTable.defaultProps = {
  sermons: [],
  headers: [],
  titleKey: 'title',
  sermonDirectory: 'sermons',
  renderLink: () => {},
  passedSx: {}
};

SermonTable.propTypes = {
  headers: PropTypes.array,
  sermons: PropTypes.array,
  titleKey: PropTypes.string,
  sermonDirectory: PropTypes.string,
  renderLink: PropTypes.func,
  passedSx: PropTypes.object
};

export default SermonTable;
