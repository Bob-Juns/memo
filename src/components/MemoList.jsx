import React from 'react';

//styles
import styled from 'styled-components';
import { color, maxSize } from '@styles/SharedStyle';
import device from '@styles/MediaQuery';

// redux
import { connect } from 'react-redux';
import { actions } from '@redux/modules/rootReducer';

// components
import Memos from '@components/Contents/Memos';
import { Button } from '@components/Shared/Buttons';

const MemoList = ({ memos, deleteAll }) => {
  const onClickClear = () => {
    deleteAll();
  };
  return (
    <Container>
      <Clear>
        {memos.length >= 2 && (
          <Button
            colour={color.red}
            onClick={onClickClear}
            buttonName="Clear All"
          />
        )}
      </Clear>
      <Contents>
        {memos.map((item) => (
          <Memos
            key={item.id}
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            description={item.description}
          />
        ))}
      </Contents>
    </Container>
  );
};

const Container = styled.article`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

const Clear = styled.aside`
  width: 100%;
  height: 1.75rem;

  padding: 0 1rem;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Contents = styled.section`
  width: 100%;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  ${device.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${device.desktop`
  grid-template-columns: repeat(4, 1fr);
  `}
`;

const mapStateToProps = (state) => {
  return {
    memos: state.memoReducer.memos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAll: () => dispatch(actions.deleteAllMemo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoList);
