import React from 'react';

import styled from 'styled-components';
import media from '../styles/MediaQuery';

const Container = styled.h1`
  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;
  z-index: 5;

  font-family: 'baloo 2', cursive;
  font-size: 50px;
  font-weight: 700;

  color: #fff;
  background-color: #9775fa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  ${media.tablet`
  height: 90px;
  font-size: 40px;
`}

  ${media.mobile`
  height: 70px;
  font-size: 30px;
`}

${media.extraSmall`
height: 50px;
font-size: 25px;
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
