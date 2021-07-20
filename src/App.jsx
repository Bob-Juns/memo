import React from 'react';

// redux
import { connect } from 'react-redux';

//styles
import styled from 'styled-components';
import { maxSize } from './styles/SharedStyle';
import device from './styles/MediaQuery';

//components
import Layout from './components/Layout';
import Header from './components/Header';
import Create from './components/CreateMemo/Create';
import Memos from './components/Memos/Memos';

const App = ({ memos }) => {
  console.log();
  return (
    <Layout>
      <Header />
      <Create />
      <MemoList>
        {memos.map((item) => (
          <Memos
            key={item.id}
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            description={item.description}
          />
        ))}
      </MemoList>
    </Layout>
  );
};

const MemoList = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  ${device.tablet`
    grid-template-columns: repeat(3, 1fr);
    max-width: ${maxSize.tablet};
  `}

  ${device.desktop`
  grid-template-columns: repeat(4, 1fr);
    max-width: ${maxSize.desktop};
  `}
`;

const mapStateToProps = (state) => {
  return {
    memos: state.memoReducer.memos,
  };
};

export default connect(mapStateToProps)(App);
