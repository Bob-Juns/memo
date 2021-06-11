import React from 'react';

// styles
import styled from 'styled-components';

// assets
import TrashIcon from '../../assets/trash.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Save = styled.button`
  padding: 0.5rem 1rem;

  color: #7048e8;

  display: inline-block;

  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }

  &:active {
    background-color: #e9ecef;
  }
`;

const Trash = styled(TrashIcon)`
  width: 20px;
  height: 20px;

  color: #adb5bd;

  cursor: pointer;

  &:hover {
    color: #7048e8;
  }
`;

const Buttons = ({ onDelete, onSubmit, btnName }) => {
  return (
    <>
      <Container>
        <Trash onClick={onDelete} />
        <Save onClick={onSubmit}>{btnName}</Save>
      </Container>
    </>
  );
};

export default Buttons;
