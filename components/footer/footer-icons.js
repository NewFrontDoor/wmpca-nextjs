/** @jsx jsx */
import PropTypes from 'prop-types';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRss,
  FaVimeoV,
  FaPodcast,
  FaUserLock
} from 'react-icons/fa';
import {jsx} from 'theme-ui';
import Link from '../link';

const wrapperStyles = {
  gridArea: 'primary',
  display: 'grid',
  gridAutoFlow: 'column',
  margin: '0',
  marginBottom: ['40px', '40px', 0],
  padding: ['0', '0 20%', '0'],
  justifyItems: 'center',
  listStyle: 'none',
  li: {
    display: 'inline-block',
    background: '#565a5c',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    '&:hover': {
      background: '#edb512'
    }
  }
};

const iconStyle = {
  color: 'white',
  padding: '10px',
  height: '100%',
  width: '100%'
};

const getIcon = {
  twitter: <FaTwitter sx={iconStyle} />,
  facebook: <FaFacebookF sx={iconStyle} />,
  instagram: <FaInstagram sx={iconStyle} />,
  linkedin: <FaLinkedinIn sx={iconStyle} />,
  youtube: <FaYoutube sx={iconStyle} />,
  vimeo: <FaVimeoV sx={iconStyle} />,
  rss: <FaRss sx={iconStyle} />,
  podcast: <FaPodcast sx={iconStyle} />,
  elvanto: <img sx={iconStyle} src="/elvanto-icon.svg" />,
  login: <FaUserLock sx={iconStyle} />
};

const FooterIcons = ({social}) => {
  return (
    <ul sx={wrapperStyles}>
      {social.map(icon => (
        <li key={icon.url}>
          <Link link={icon.url}>{getIcon[icon.type]}</Link>
        </li>
      ))}
    </ul>
  );
};

FooterIcons.propTypes = {
  social: PropTypes.arrayOf(PropTypes.object)
};

export default FooterIcons;
