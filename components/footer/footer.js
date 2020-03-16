import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: #333;
  background-image: url('/backgrounds/office.png');
  box-shadow: 0px 6px 13px 6px black;
  color: #797979;
  font-size: 12px;
  padding: 30px 0px;
  grid-area: footer;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'primary'
    'sidebar-b'
    'sidebar-a'
    'tertiary';
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'primary primary'
      'sidebar-a sidebar-b'
      'tertiary tertiary';
    justify-content: space-around;
  }
  @media (min-width: 1086px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'sidebar-a primary sidebar-b'
      'sidebar-a tertiary sidebar-b';
  }

  #footer h4 {
    margin-bottom: 15px;
    color: #f8f8f8;
  }

  #footer_menu {
    margin: 0px;
    text-align: right;
  }

  #footer_menu li {
    list-style: none;
    display: inline;
    margin-right: 10px;
  }
`;

export default function Footer({children, subtext}) {
  return (
    <Wrapper>
      <Grid>{children}</Grid>
      <hr style={{border: '1px solid #333', width: '90%'}} />
      <div style={{textAlign: 'center', fontSize: '12px'}}>{subtext}</div>
    </Wrapper>
  );
}
