import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createMemo } from '../../redux/modules/memoReducer';

import styled from 'styled-components';
import media from '../../styles/MediaQuery';

import InputSet from './InputSet';
import Buttons from '../Buttons';

const Container = styled.div`
  color: #000;
`;

const InputBox = styled.div`
  width: 700px;
  margin: 1rem auto;
  padding: 1rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  cursor: text;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  ${media.tablet`
    width: 500px;
  `}

  ${media.mobile`
    width: 380px;
  `}

  ${media.extraSmall`
    width: 290px;
  `}
`;

const Warning = styled.h5`
  color: red;
  font-size: 0.8rem;
`;

const Placeholder = styled.h5`
  font-size: 1.2rem;
  font-weight: 300;
  color: #ced4da;
`;

const Create = ({ createMemo }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [title, setTitle] = useState('');
  const [warningDesc, setWarningDesc] = useState('');
  const [description, setDescription] = useState('');

  const focusRef = useRef(null);

  // placeholder 클릭 시, 인풋 창 오픈
  const onClickInput = () => {
    setIsFocus(true);
  };

  // 인풋 영역 외부 클릭 시,
  const onClickOutside = (event) => {
    if (focusRef.current && !focusRef.current.contains(event.target)) {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [focusRef]);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  // 휴지통 아이콘 클릭 시, 인풋 초기화
  const onDeleteInput = () => {
    setTitle('');
    setDescription('');
    setWarningDesc('');
  };

  // 메모 생성
  const onCreateMemo = (event) => {
    event.preventDefault();
    if (title === '') {
      setWarningDesc('제목을 입력하세요.');
    } else if (description === '') {
      setWarningDesc('내용을 입력하세요.');
    } else {
      createMemo(title, description);
      onDeleteInput();
      setIsFocus(false);
      setWarningDesc('');
    }
  };

  return (
    <Container>
      {isFocus ? (
        <InputBox ref={focusRef}>
          <InputSet
            onChangeInput={onChangeInput}
            title={title}
            description={description}
          />
          <Warning>{warningDesc}</Warning>
          <Buttons
            onDelete={onDeleteInput}
            onSubmit={onCreateMemo}
            btnName="생성"
          />
        </InputBox>
      ) : (
        <InputBox onClick={onClickInput}>
          <Placeholder>메모를 입력하세요.</Placeholder>
        </InputBox>
      )}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMemo: (title, description) =>
      dispatch(createMemo(title, description)),
  };
};

export default connect(null, mapDispatchToProps)(Create);
