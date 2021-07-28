import React from 'react';

// styles
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  padding-bottom: 1rem;
  margin: 0 auto;
`;

export default Layout;
