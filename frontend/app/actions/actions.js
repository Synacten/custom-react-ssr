import axios from 'axios';
import { TEST } from './types';

export const testing = () => async (dispatch) => {
  const { data } = await axios.get('');
  dispatch({
    type: TEST,
    data,
  });
};
