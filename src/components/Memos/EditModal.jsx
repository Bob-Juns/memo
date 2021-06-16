import React, { useState, useEffect, useRef } from 'react';
import Textarea from 'react-textarea-autosize';

// styles
import styled from 'styled-components';
import { size, color } from '../../styles/SharedStyle';
import device from '../../styles/MediaQuery';

//redux
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/rootReducer';

// components
import Modal from '../Shared/Modal';

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

const Text = styled.h1`
  width: 100%
  font-size: ${size.small};

  ${device.tablet`
    font-size: ${size.medium};
  `}
`;

const Title = styled.input`
  width: 100%;
  margin-top: ${size.base};

  font-size: ${size.small};
  display: block;

  ${device.tablet`
  font-size: ${size.medium};
  `}
`;

const Description = styled(Textarea)`
  width: 100%;
  margin-top: calc(0.5 * ${size.base});

  font-size: ${size.tiny};

  display: block;

  resize: both;

  ${device.tablet`
  font-size: ${size.base};
  `}
`;

const EditBtn = styled.button`
  margin-top: auto;
  margin-left: auto;
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
