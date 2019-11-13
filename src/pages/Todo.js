import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchTodos } from '../store/actions';

// eslint-disable-next-line no-shadow
const Todo = ({ fetchTodos, todos }) => {
  useEffect(() => {
    fetchTodos();
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
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.id} {todo.title}
        </p>
      ))}
    </div>
  );
};

const loadData = (store, param) => store.dispatch(fetchTodos(param));

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = { fetchTodos };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Todo),
  loadData,
};
