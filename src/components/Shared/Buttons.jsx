import React, { memo } from 'react';

// styles
import styled from 'styled-components';
import { color } from '@styles/SharedStyle';

// assets
import TrashSvg from '@assets/TrashSvg';

export const Button = memo(({ alone, colour, onClick, buttonName }) => {
  return (
    <_Button alone={alone} colour={colour} onClick={onClick}>
      {buttonName}
    </_Button>
  );
});

export const Trash = memo(({ onClick }) => {
  return (
    <TrashSvg
      fill={color.gray.dark}
      width="1.25rem"
      height="1.25rem"
      onClick={onClick}
    />
  );
});

const _Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${(props) => props.colour};
  margin: ${(props) => (props.alone ? 'auto 0 0 auto' : '')};

  display: inline-block;

  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: ${color.gray.base};
  }
`;
