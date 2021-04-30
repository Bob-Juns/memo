import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { deleteMemo } from '../../redux/modules/memoReducer';

import styled from 'styled-components';
import media from '../../styles/MediaQuery';

import Buttons from '../Buttons';

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CreatedAt = styled.h5`
  font-size: 0.7rem;
  color: #adb5bd;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const Description = styled.p`
  display: block;
  width: 100%;
  max-height: 180px;
  margin-bottom: auto;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  word-break: break-all;
  white-space: pre-line;
  overflow: auto;
`;

const Memo = ({ id, title, description, createdAt, onSubmit, deleteMemo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달 오픈 시, 백그라운드 스크롤 방지.
  useEffect(() => {
    modalOpen && (document.body.style.overflow = 'hidden');
    !modalOpen && (document.body.style.overflow = 'unset');
  }, [modalOpen]);

  const onClickDeleteBtn = () => {
    setModalOpen((prev) => !prev);
  };

  const deleteConfirmed = () => {
    deleteMemo(id);
  };

  return (
    <Container>
      <CreatedAt>{createdAt}</CreatedAt>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buttons onDelete={onClickDeleteBtn} onSubmit={onSubmit} btnName="수정" />
      {modalOpen && (
        <ConfirmModal
          onDeleteMemo={deleteConfirmed}
          cancelDelete={onClickDeleteBtn}
        />
      )}
    </Container>
  );
};

// confirm modal
const ModalBackground = styled.article`
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
  width: 380px;
  height: 200px;
  background-color: #fff;
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ${media.extraSmall`
  width: 300px;
  height: 150px;
  `}
`;

const Ask = styled.h1`
  display: block;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;

  ${media.extraSmall`
  font-size: 0.8rem;
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
font-weight: 500;

&:hover {
  background-color: #f1f3f5;
}

&:active {
  background-color #e9ecef;
}
`;

const ConfirmModal = ({ onDeleteMemo, cancelDelete }) => {
  return (
    <ModalBackground>
      <Wrapper>
        <Ask>메모를 삭제하시겠습니까?</Ask>
        <ButtonGroup>
          <Cancel onClick={cancelDelete}>취소</Cancel>
          <Delete onClick={onDeleteMemo}>삭제</Delete>
        </ButtonGroup>
      </Wrapper>
    </ModalBackground>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMemo: (id) => dispatch(deleteMemo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Memo);
