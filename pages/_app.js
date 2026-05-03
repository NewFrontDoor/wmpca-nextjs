import PropTypes from 'prop-types';
import React from 'react';
import App from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from '../theme/theme';
import openSans from '@fontsource/open-sans';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired
};