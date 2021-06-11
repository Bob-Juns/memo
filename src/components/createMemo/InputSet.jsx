import React, { useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';

import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
`;

const StyledTextArea = styled(Textarea)`
  width: 100%;
  margin-top: 1rem;

  font-size: 1.125rem;

  resize: both;
`;

const InputSet = ({ onChangeInput, title, description }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <TitleInput
        type="text"
        name="title"
        onChange={onChangeInput}
        placeholder="제목"
        value={title}
        maxLength="15"
        ref={inputRef}
      />
      <StyledTextArea
        type="text"
        name="description"
        onChange={onChangeInput}
        placeholder="내용을 입력하세요."
        value={description}
        minRows={3}
        maxRows={10}
        maxLength="200"
      />
    </>
  );
};

export default InputSet;
