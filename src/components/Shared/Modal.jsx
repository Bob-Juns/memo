import React from 'react';

// styles
import styled from 'styled-components';
import { size, screen } from '../../styles/SharedStyle';
import device from '../../styles/MediaQuery';

const Modal = ({ children }) => {
  return (
    <>
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

const Container = styled.article`
  width: 100vw;
  height: 100vh;

  padding: ${size.base};

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 200px;

  background-color: #fff;

  padding: calc(2 * ${size.base}) calc(2 * ${size.base}) ${size.large};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 10px;

  ${device.tablet`
      width: 70%;
      max-width: ${screen.tablet};
      height: 300px;
    `}
`;

export default Modal;
