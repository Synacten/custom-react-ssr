import axios from 'axios';

import { FETCH_TODOS } from './types';

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );

  dispatch({
    type: FETCH_TODOS,
    payload: response.data,
  });
};
