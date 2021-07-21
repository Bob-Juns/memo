import React, { memo, useState, useEffect, useRef } from 'react';

// styles
import styled from 'styled-components';
import { color, maxSize } from '@styles/SharedStyle';

// redux
import { connect } from 'react-redux';
import { actions } from '@redux/modules/rootReducer';

// components
import InputSet from '@components/Shared/InputSet';
import { Button, Trash } from '@components/Shared/Buttons';

const Create = ({ createMemo }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
  });

  const [warning, setWarning] = useState('');

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
    const { name, value } = event.currentTarget;
    if (name === 'title') {
      setInputValue({
        ...inputValue,
        title: value,
      });
    } else if (name === 'description') {
      setInputValue({
        ...inputValue,
        description: value,
      });
    }
  };

  // 휴지통 아이콘 클릭 시, 인풋 초기화
  const onClickTrash = () => {
    setInputValue({
      title: '',
      description: '',
    });
    setWarning('');
  };

  // 메모 생성
  const onClickCreate = (event) => {
    event.preventDefault();
    if (inputValue.title === '') {
      setWarning('제목을 입력하세요.');
    } else if (inputValue.description === '') {
      setWarning('내용을 입력하세요.');
    } else {
      createMemo(inputValue.title, inputValue.description);
      onClickTrash();
      setIsFocus(false);
    }
  };

  return (
    <Container>
      {isFocus ? (
        <InputBox ref={focusRef}>
          <InputSet
            onChange={onChangeInput}
            title={inputValue.title}
            description={inputValue.description}
          />
          <Warning>{warning}</Warning>
          <Buttons>
            <Trash onClick={onClickTrash} />
            <Button
              colour={color.purple.dark}
              onClick={onClickCreate}
              buttonName="생성"
            />
          </Buttons>
        </InputBox>
      ) : (
        <InputBox onClick={onClickInput}>
          <Placeholder>메모를 입력하세요.</Placeholder>
        </InputBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: ${maxSize.mobile};
  margin: 0 auto;
  color: #000;
  padding: 1rem;
`;

const InputBox = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  cursor: text;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Warning = styled.mark`
  color: ${color.red};
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: 0.75rem;
`;

const Buttons = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Placeholder = styled.h2`
  color: ${color.gray.dark};

  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: 1rem;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    createMemo: (title, description) =>
      dispatch(actions.createMemo(title, description)),
  };
};

export default connect(null, mapDispatchToProps)(memo(Create));
