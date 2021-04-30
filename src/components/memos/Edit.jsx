import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { updateMemo } from '../../redux/modules/memoReducer';
import { handleEditorOpen } from '../../redux/modules/editorReducer';

import styled from 'styled-components';
import media from '../../styles/MediaQuery';

import Textarea from 'react-textarea-autosize';

const Container = styled.article`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Wrapper = styled.section`
  width: 600px;
  height: 300px;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${media.mobile`
  width: 400px;
  height: 200px;
  `}

  ${media.extraSmall`
  width: 300px;
  height: 200px;
  `}
`;

const Title = styled.input`
  display: block;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;

  ${media.extraSmall`
  font-size: 1.1rem;
  `}
`;

const Description = styled(Textarea)`
  display: block;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  resize: both;

  ${media.extraSmall`
  font-size: 0.8rem;
  `}
`;

const EditBtn = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  color:#7048e8;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-top: auto;
  margin-left: auto;

  &:hover {
    background-color: #f1f3f5;
  }

  &:active {
    background-color #e9ecef;
  }
`;

const Edit = ({
  id,
  title,
  description,
  updateMemo,
  editors,
  handleEditorOpen,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeInput = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'title') {
      setEditedTitle(value);
    } else if (name === 'description') {
      setEditedDescription(value);
    }
  };

  const onSubmitEditedMemo = () => {
    updateMemo(id, editedTitle, editedDescription);
    editors.isOpened ? handleEditorOpen(false) : handleEditorOpen(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title
          type="text"
          name="title"
          value={editedTitle}
          onChange={onChangeInput}
          maxLength="15"
          ref={inputRef}
        />
        <Description
          type="text"
          name="description"
          value={editedDescription}
          onChange={onChangeInput}
          minRows={5}
          maxRows={10}
          maxLength="250"
        />
        <EditBtn onClick={onSubmitEditedMemo}>확인</EditBtn>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    editors: state.editorReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMemo: (id, title, description) =>
      dispatch(updateMemo(id, title, description)),
    handleEditorOpen: (isOpened) => dispatch(handleEditorOpen(isOpened)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
