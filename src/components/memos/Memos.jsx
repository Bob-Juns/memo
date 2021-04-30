import React, { useEffect } from 'react';

import styled from 'styled-components';
import media from '../../styles/MediaQuery';

import { connect } from 'react-redux';
import { handleEditorOpen } from '../../redux/modules/editorReducer';

import Memo from './Memo';
import Edit from './Edit';

const Container = styled.section`
  height: 250px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${media.tablet`
  height: 220px;
  `}

  ${media.mobile`
  height: 200px;
  `}

  ${media.extraSmall`
  height: 180px;
  `}
`;

const Memos = ({
  editors,
  handleEditorOpen,
  id,
  title,
  createdAt,
  description,
}) => {
  // editor 오픈 시, 백그라운드 스크롤 방지.
  useEffect(() => {
    editors.isOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [editors.isOpened]);

  const editorHandler = () => {
    editors.isOpened ? handleEditorOpen(false) : handleEditorOpen(true);
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
      {editors.isOpened && (
        <Edit
          id={id}
          title={title}
          description={description}
          closeEditor={editorHandler}
        />
      )}
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
    handleEditorOpen: (isOpened) => dispatch(handleEditorOpen(isOpened)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memos);
