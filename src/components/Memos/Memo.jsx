import React, { useState, useEffect } from 'react';

// styles
import styled from 'styled-components';
import device from '../../styles/MediaQuery';

// redux
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/rootReducer';

// components
import Modal from '../Shared/Modal';
import Buttons from '../Shared/Buttons';

const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CreatedAt = styled.h5`
  color: #adb5bd;
  font-family: 'NEXON Lv2 Gothic', sans-serif;
  font-size: 0.75rem;
`;

const Title = styled.h1`
  width: 100%;
  margin-top: 1rem;

  font-size: 1.25rem;

  display: block;
`;

const Description = styled.p`
  width: 100%;
  max-height: 180px;

  margin-top: 1rem;
  margin-bottom: auto;

  font-size: 1rem;
  line-height: 120%;

  display: block;

  word-break: break-all;
  white-space: pre-line;

  overflow: auto;
`;

const Ask = styled.h1`
  display: block;
  width: 100%;

  font-size: 1.125rem;

  ${device.tablet`
  font-size: 1.25rem;
  `}
`;

const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Cancel = styled.button`
  padding: 0.5rem 1rem;
  color: #adb5bd;
  cursor: pointer;

  &:hover {
    color: #7048e8;
  }
`;

const Delete = styled.button`
  padding: 0.5rem 1rem;
  color:red;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }

  &:active {
    background-color #e9ecef;
  }
`;

const Memo = ({ id, title, description, createdAt, onSubmit, deleteMemo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달 오픈 시, 백그라운드 스크롤 방지.
  useEffect(() => {
    modalOpen && (document.body.style.overflow = 'hidden');
    !modalOpen && (document.body.style.overflow = 'unset');
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen((prev) => !prev);
  };

  const onClickDelete = () => {
    deleteMemo(id);
  };

  return (
    <Container>
      <CreatedAt>{createdAt}</CreatedAt>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buttons onDelete={openModal} onSubmit={onSubmit} btnName="수정" />
      {modalOpen && (
        <Modal>
          <Ask>메모를 삭제하시겠습니까?</Ask>
          <ButtonGroup>
            <Cancel onClick={openModal}>취소</Cancel>
            <Delete onClick={onClickDelete}>삭제</Delete>
          </ButtonGroup>
        </Modal>
      )}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMemo: (id) => dispatch(actions.deleteMemo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Memo);
