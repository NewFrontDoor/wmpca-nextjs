import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 4px 12px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-bottom-color: #b3b3b3;
  border-radius: 4px;
  background-color: #565a5c;
  color: #ffffff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const NavButton = ({children, to}) => {
  const history = useHistory();

  function handleClick() {
    history.push(to);
  }

  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  );
}

export {NavButton};
