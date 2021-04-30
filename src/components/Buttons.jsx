import React from 'react';
import styled from 'styled-components';

import TrashIcon from '../assets/trash.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Save = styled.button`
    display: inline-block;
    padding: 0.5rem 1rem;
    color:#7048e8;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #f1f3f5;
    }

    &:active {
      background-color #e9ecef;
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
