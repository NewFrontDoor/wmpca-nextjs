import React from 'react';
import styled from '@emotion/styled';

const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: 'Raleway', sans-serif;
  background: url('/section-head2.png');
  padding: 15px 0px;
  text-transform: uppercase;
  margin: 40px 0px;

  span {
    color: #333;
    padding: 3px 5px;
    font-weight: 400;
  }
`;

export default function SectionTitle({text}) {
  return (
    <Title>
      <span>{text}</span>
    </Title>
  );
}
