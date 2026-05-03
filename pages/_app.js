import PropTypes from 'prop-types';
import React from 'react';
import App from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from '../theme/theme';
import openSans from '@fontsource/open-sans';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeUIProvider theme={theme}>
        <root>
          <Component {...pageProps} />
        </root>
      </ThemeUIProvider>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default MyApp;
