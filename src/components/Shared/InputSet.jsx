import React, { memo, useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';

import styled from 'styled-components';

const InputSet = ({ onChange, title, description }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <TitleInput
        type="text"
        name="title"
        onChange={onChange}
        placeholder="제목"
        value={title}
        maxLength="30"
        ref={inputRef}
      />
      <StyledTextArea
        type="text"
        name="description"
        onChange={onChange}
        placeholder="내용"
        value={description}
        minRows={3}
        maxRows={10}
        maxLength="200"
      />
    </>
  );
};

const TitleInput = styled.input`
  width: 100%;
  font-size: 1rem;
`;

const StyledTextArea = styled(Textarea)`
  width: 100%;
  margin-top: 1.125rem;

  font-size: 0.75rem;

  resize: both;
`;

export default memo(InputSet);
