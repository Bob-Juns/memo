import React from 'react';

// styles
import styled from 'styled-components';
import { color } from '@styles/SharedStyle';

const Header = () => {
  return (
    <>
      <Container>MEMO</Container>
    </>
  );
};

const Container = styled.h1`
  width: 100%;
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  z-index: 3;

  font-family: 'baloo 2', cursive;
  font-weight: 800;
  font-size: 1.25rem;

  color: #fff;
  background-color: ${color.purple.dark};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export default Header;
