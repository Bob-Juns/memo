import React, { memo } from 'react';

// styles
import styled from 'styled-components';
import { color } from '@styles/SharedStyle';

// components
import { Button, Trash } from '@components/Shared/Buttons';

const Memo = ({ createdAt, title, description, onClickTrash, onClickEdit }) => {
  return (
    <Container>
      <CreatedAt>{createdAt}</CreatedAt>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buttons space>
        <Trash onClick={onClickTrash} />
        <Button
          colour={color.purple.dark}
          onClick={onClickEdit}
          buttonName="수정"
        />
      </Buttons>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const CreatedAt = styled.time`
  color: ${color.gray.dark};
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: 0.75rem;
`;

const Title = styled.h2`
  width: 100%;
  max-height: 3rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;

  display: block;

  word-break: break-all;
  white-space: pre-line;

  overflow: auto;
`;

const Description = styled.p`
  width: 100%;
  max-height: 10rem;
  margin-bottom: auto;

  font-size: 0.75rem;
  line-height: 120%;

  display: block;

  word-break: break-all;
  white-space: pre-line;

  overflow: auto;
`;

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: ${(props) => (props.space ? 'space-between' : 'flex-end')};
  align-items: center;
`;

export default memo(Memo);
