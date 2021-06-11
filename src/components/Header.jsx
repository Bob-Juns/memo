import React from 'react';

// styles
import styled from 'styled-components';
import device from '../styles/MediaQuery';

const Container = styled.h1`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;

  z-index: 5;

  font-family: 'baloo 2', cursive;
  font-weight: 700;
  font-size: 1.75rem;

  color: #fff;
  background-color: #9775fa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  ${device.tablet`
    height: 80px;
    font-size: 3rem;
  `}
`;

const Header = () => {
  return (
    <>
      <Container>MEMO</Container>
    </>
  );
};

export default Header;
