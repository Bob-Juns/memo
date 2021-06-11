import React from 'react';

// styles
import styled from 'styled-components';
import device from '../../styles/MediaQuery';

const Container = styled.article`
  width: 100vw;
  height: 100vh;

  padding: 1rem;

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

  padding: 2rem 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 10px;

  ${device.tablet`
      width: 70%;
      max-width: 768px;
      height: 300px;
    `}
`;

const Modal = ({ children }) => {
  return (
    <>
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

export default Modal;
