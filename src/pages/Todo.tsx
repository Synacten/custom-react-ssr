import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getTestData } from '../store/actions/root-actions';
import { TodoTypes } from '../store/types/root-types';

interface TodoComponentTypes {
  getTestData: () => Promise<void>;
  data: TodoTypes[];
}

const Todo: FC<TodoComponentTypes> = ({ getTestData: _getTestData, data }) => {
  useEffect(() => {
    _getTestData();
  }, []);
  return (
    <div>
      <Helmet>
        <meta name="description" content="Helmet application Todo" />
        <title>Todo</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Todo</h1>
      <Link to="/">Home</Link>
      <br />
      {data.map((item) => (
        <p key={item.id}>
          {item.id}
          {' '}
          {item.title}
        </p>
      ))}
    </div>
  );
};

const loadData = (store: any, params: any) => store.dispatch(getTestData(params));

const mapStateToProps = (state: any) => ({
  data: state.root.data,
});

const mapDispatchToProps = { getTestData };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Todo),
  loadData,
};
