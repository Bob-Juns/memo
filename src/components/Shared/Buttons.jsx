import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '../../styles/SharedStyle';
// assets
import TrashIcon from '../../assets/trash.svg';

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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Save = styled.button`
  padding: calc(0.5 * ${size.base}) ${size.base};

  color: ${color.dark};

  display: inline-block;

  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${color.gray};
  }

  &:active {
    background-color: ${color.lightGray};
  }
`;

const Trash = styled(TrashIcon)`
  width: ${size.medium};
  height: ${size.medium};

  color: #adb5bd;

  cursor: pointer;

  &:hover {
    color: ${color.dark};
  }
`;

export default Buttons;
