import React, { useState, useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';

// styles
import styled from 'styled-components';
import device from '../../styles/MediaQuery';

//redux
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/rootReducer';

// components
import Modal from '../Shared/Modal';

const Text = styled.h1`
  width: 100%
  font: {
    size: 1.125rem;
  }


  ${device.tablet`
    font-size: 1.25rem;
  `}
`;

const Title = styled.input`
  width: 100%;
  margin-top: 1rem;

  font-size: 1.125rem;
  display: block;

  ${device.tablet`
  font-size: 1.25rem;
  `}
`;

const Description = styled(Textarea)`
  width: 100%;
  margin-top: 0.5rem;

  font-size: 0.75rem;

  display: block;

  resize: both;

  ${device.tablet`
  font-size: 1rem;
  `}
`;

const EditBtn = styled.button`
  margin-top: auto;
  margin-left: auto;
  padding: 0.5rem 1rem;

  color:#7048e8;

  display: inline-block;

  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }

  &:active {
    background-color #e9ecef;
  }
`;

const EditModal = ({
  id,
  title,
  description,
  updateMemo,
  isOpened,
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
    isOpened ? handleEditorOpen(false) : handleEditorOpen(true);
  };

  return (
    <Modal>
      <Text>메모 수정하기</Text>
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
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpened: state.editorReducer.isOpened,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMemo: (id, title, description) =>
      dispatch(actions.updateMemo(id, title, description)),
    handleEditorOpen: (isOpened) =>
      dispatch(actions.handleEditorOpen(isOpened)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
