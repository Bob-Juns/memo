import React, { useEffect } from 'react';

// styles
import styled from 'styled-components';
import { size } from '../../styles/SharedStyle';
import device from '../../styles/MediaQuery';

// redux
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/rootReducer';

// components
import Memo from './Memo';
import EditModal from './EditModal';

const Memos = ({
  isOpened,
  handleEditorOpen,
  id,
  title,
  createdAt,
  description,
}) => {
  // editor 오픈 시, 백그라운드 스크롤 방지.
  useEffect(() => {
    isOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isOpened]);

  const editorHandler = () => {
    isOpened ? handleEditorOpen(false) : handleEditorOpen(true);
  };

  return (
    <Container>
      <Memo
        id={id}
        title={title}
        createdAt={createdAt}
        description={description}
        onSubmit={editorHandler}
      />
      {isOpened && (
        <EditModal
          id={id}
          title={title}
          description={description}
          closeEditor={editorHandler}
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 180px;
  padding: ${size.base};

  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

  ${device.tablet`
  height: 200px;
  `}

  ${device.desktop`
  height: 250px;
  `}
`;

const mapStateToProps = (state) => {
  return {
    isOpened: state.editorReducer.isOpened,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditorOpen: (isOpened) =>
      dispatch(actions.handleEditorOpen(isOpened)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memos);
