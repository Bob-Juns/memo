import React from 'react';

import styled from 'styled-components';
import media from '../styles/MediaQuery';

const Container = styled.article`
  width: 100vw;
  min-height: 100vh;
  padding-top: 100px;

  ${media.tablet`
  padding-top: 90px;
`}

  ${media.mobile`
  padding-top: 70px;
`}

${media.extraSmall`
padding-top: 50px;
`}
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
