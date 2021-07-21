import React from 'react';

// styles
import styled from 'styled-components';
import { color } from '@styles/SharedStyle';

// components
import { Button } from '@components/Shared/Buttons';

const Modal = ({
  width,
  height,
  title,
  children,
  leftButtonColor,
  leftButtonName,
  onClickLeftButton,
  rightButtonColor,
  rightButtonName,
  onClickRightButton,
}) => {
  return (
    <>
      <Container>
        <Wrapper width={width} height={height}>
          <Title>{title}</Title>
          {children}
          <Buttons>
            <Button
              colour={leftButtonColor}
              buttonName={leftButtonName}
              onClick={onClickLeftButton}
            />
            <Button
              colour={rightButtonColor}
              buttonName={rightButtonName}
              onClick={onClickRightButton}
            />
          </Buttons>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.article`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
`;

const Wrapper = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-color: #fff;

  padding: 1.5rem 1rem 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.5rem;
`;

const Title = styled.h3`
  width: 100%;
  color: ${color.purple.dark};
  font-size: 1rem;

  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  width: 100%;

  margin-top: auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Modal;
