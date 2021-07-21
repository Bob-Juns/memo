import React, { memo, useState } from 'react';

// styles
import styled from 'styled-components';

import { connect } from 'react-redux';
import { actions } from '@redux/modules/rootReducer';

// components
import Memo from '@components/Contents/Memo';
import EditModal from '@components/Modals/EditModal';
import DeleteModal from '@components/Modals/DeleteModal';

const Memos = ({
  id,
  title,
  createdAt,
  description,
  updateMemo,
  deleteMemo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState({
    editModal: false,
    deleteModal: false,
  });
  const [inputValue, setInputValue] = useState({
    title,
    description,
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
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

  const onClickCancelEditor = () => {
    setInputValue({
      ...inputValue,
      title,
      description,
    });
    onClickEdit();
  };

  const onClickTrash = () => {
    setIsModalOpen({
      ...isModalOpen,
      deleteModal: isModalOpen.deleteModal ? false : true,
    });
  };

  const onClickEdit = () => {
    setIsModalOpen({
      ...isModalOpen,
      editModal: isModalOpen.editModal ? false : true,
    });
  };

  const onClickConfirm = () => {
    updateMemo(id, inputValue.title, inputValue.description);
    onClickEdit();
  };

  const onClickDelete = () => {
    deleteMemo(id);
    onClickTrash();
  };

  return (
    <Container>
      <Memo
        id={id}
        title={title}
        createdAt={createdAt}
        description={description}
        onClickTrash={onClickTrash}
        onClickEdit={onClickEdit}
      />
      {isModalOpen.editModal && (
        <EditModal
          title={title}
          titleValue={inputValue.title}
          description={description}
          descriptionValue={inputValue.description}
          onChange={onChangeInput}
          onClickCancel={onClickCancelEditor}
          onClickConfirm={onClickConfirm}
        />
      )}
      {isModalOpen.deleteModal && (
        <DeleteModal
          onClickCancel={onClickTrash}
          onClickDelete={onClickDelete}
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  padding: 1rem 0.75rem 0.5rem;

  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

const mapDispatchToProps = (dispatch) => {
  return {
    updateMemo: (id, title, description) =>
      dispatch(actions.updateMemo(id, title, description)),
    deleteMemo: (id) => dispatch(actions.deleteMemo(id)),
  };
};

export default connect(null, mapDispatchToProps)(memo(Memos));
