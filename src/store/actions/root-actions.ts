import fetch from 'isomorphic-fetch';

import { Dispatch } from 'redux';
import { TESTDATA, FetchTodosTypes, TodoTypes } from '../types/root-types';

export const getTestData = (arg?: any) => async (dispatch: Dispatch<FetchTodosTypes>) => {
  const req = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (req.status === 200) {
    const json: TodoTypes[] = await req.json();
    dispatch({
      type: TESTDATA,
      json,
    });
  } else {
    dispatch({
      type: TESTDATA,
      json: [],
    });
  }
};
