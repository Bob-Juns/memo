import React, { memo } from 'react';

// styles
import { color } from '@styles/SharedStyle';

// components
import Modal from '@components/Shared/Modal';
import InputSet from '@components/Shared/InputSet';
import { Button } from '@components/Shared/Buttons';

// hooks
import useMedia from '@hooks/useMedia';

const EditModal = ({
  titleValue,
  descriptionValue,
  onChange,
  onClickCancel,
  onClickConfirm,
}) => {
  const isLarge = useMedia(`(min-width: 768px)`);

  return (
    <Modal
      width={isLarge ? '500px' : '280px'}
      height="200px"
      title="메모 수정하기"
      leftButtonColor={color.gray.dark}
      leftButtonName="취소"
      onClickLeftButton={onClickCancel}
      rightButtonColor={color.purple.dark}
      rightButtonName="확인"
      onClickRightButton={onClickConfirm}
    >
      <InputSet
        onChange={onChange}
        title={titleValue}
        description={descriptionValue}
      />
    </Modal>
  );
};

export default memo(EditModal);
