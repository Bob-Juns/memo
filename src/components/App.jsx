import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';
import media from '../styles/MediaQuery';

import Layout from './Layout';
import Header from './Header';
import Create from './createMemo/Create';
import Memos from './memos/Memos';

const MemoList = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 1rem;

  ${media.tablet`
  grid-template-columns: repeat(3, 1fr);
`}

  ${media.mobile`
  grid-template-columns: repeat(2, 1fr);
`}

${media.extraSmall`
  grid-template-columns: repeat(1, 1fr);
`}
`;

const App = ({ memos }) => {
  return (
    <Layout>
      <Header />
      <Create />
      <MemoList>
        {memos.map((memo) => (
          <Memos
            key={memo.id}
            id={memo.id}
            title={memo.title}
            createdAt={memo.createdAt}
            description={memo.description}
          ></Memos>
        ))}
      </MemoList>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    memos: state.memoReducer.memos,
  };
};

export default connect(mapStateToProps)(App);
