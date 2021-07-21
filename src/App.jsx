import React from 'react';

// redux
import { connect } from 'react-redux';

// components
import Layout from '@components/Layout';
import Header from '@components/Header';
import Create from '@components/Create';
import MemoList from '@components/MemoList';

const App = ({ memos }) => {
  console.log();
  return (
    <Layout>
      <Header />
      <Create />
      <MemoList />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    memos: state.memoReducer.memos,
  };
};

export default connect(mapStateToProps)(App);
