import React from 'react';
import styled from '@emotion/styled';
import {
  contact,
  menu /* Slides, heading, about, newsletter, connect, blog, welcome, portfolio */
} from '../data/app-content';
import Sidebar from './sidebar/sidebar';
import FooterIcons from './footer/footer-icons';
import Footer from './footer/footer';
import ActionBlock from './action-block';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: unset;
  gap: 0;
  @media (min-width: 640px) {
    grid-template-columns: 170px 1fr;
    gap: 30px;
    grid-template-areas:
      'sidebar header'
      'sidebar main';
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  grid-area: ${props => props.area};
  min-height: 100px;
`;

const Layout = ({menuItems, children}) => (
  <>
    <Container>
      <Sidebar img menuItems={menuItems} />
      {children}
    </Container>
    <Footer
      subtext={`© WOMENS MINISTRY IN THE PRESBYTERIAN CHURCH OF AUSTRALIA ${new Date().getFullYear()}. IN PARTNERSHIP WITH NEW FRONT DOOR`}
    >
      <FooterBox area="sidebar">
        <div>
          {contact.content[1].map(item => (
            <ActionBlock
              key={item.heading}
              heading={item.heading}
              content={item.content}
              action={item.action}
              url={item.url}
            />
          ))}
        </div>
      </FooterBox>
      <FooterIcons
        /* Twitter={{url: 'test'}}
            instagram={{url: 'test'}}
            podcast={{url: 'test'}}
                login={{url: 'test'}} */

        facebook={{url: 'https://www.facebook.com/wmpres/'}}
      />
      <FooterBox area="sidebar2">
        {/* <LatestSermon
                title="Test"
                preacher="Test Guy"
                sermonUrl="www.google.com"
            /> */}
      </FooterBox>
      <FooterBox area="tertiary">
        <p />
      </FooterBox>
    </Footer>
  </>
);

export default Layout;
