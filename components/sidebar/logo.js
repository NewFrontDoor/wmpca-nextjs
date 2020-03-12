import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {ReactComponent as LogoImg} from '../../public/logo.svg';
import {Styled} from 'theme-ui';

const MainTitle = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;

  h1 {
    color: #ececec;
    padding-top: 45px;
    padding-left: 8px;
    font-size: 26px;
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 640px) {
    margin-bottom: 22px;
    margin-left: 0px;
  }
`;

export default function Logo({img, sitename}) {
  return (
    <Link href="/">
      <MainTitle>
        <LogoImg />
      </MainTitle>
    </Link>
  );
}
