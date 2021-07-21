import React, { memo } from 'react';

import { color } from '@styles/SharedStyle';

import Modal from '@components/Shared/Modal';

const DeleteModal = ({ onClickCancel, onClickDelete }) => {
  return (
    <Modal
      width="280px"
      height="180px"
      title="메모를 삭제하시겠습니까?"
      leftButtonColor={color.gray.dark}
      leftButtonName="취소"
      onClickLeftButton={onClickCancel}
      rightButtonColor={color.red}
      rightButtonName="삭제"
      onClickRightButton={onClickDelete}
    ></Modal>
  );
};

export default memo(DeleteModal);
