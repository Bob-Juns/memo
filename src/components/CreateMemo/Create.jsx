import React, { useState, useEffect, useRef } from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '../../styles/SharedStyle';

// redux
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/rootReducer';

// components
import InputSet from './InputSet';
import Buttons from '../Shared/Buttons';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  color: #000;
  padding: ${size.base};
`;

const InputBox = styled.div`
  width: 100%;
  padding: ${size.base};

  background-color: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  cursor: text;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Warning = styled.h5`
  color: ${color.red};
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: ${size.tiny};
`;

const Placeholder = styled.h5`
  color: ${color.darkGray};

  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: ${size.small};
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
      dispatch(actions.createMemo(title, description)),
  };
};

export default connect(null, mapDispatchToProps)(Create);
