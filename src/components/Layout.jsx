import React from 'react';

import styled from 'styled-components';
import device from '../styles/MediaQuery';

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.article`
  width: 100vw;
  height: 100vh;

  padding-top: 60px;
  margin: 0 auto;

  ${device.tablet`
    padding-top: 80px;
  `}
`;

export default Layout;
