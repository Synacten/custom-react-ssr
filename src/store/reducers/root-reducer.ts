import { TESTDATA, ActionTypes, TodoTypes } from '../types/root-types';

interface InitialStateTypes {
    data: TodoTypes[]
}

const initialState: InitialStateTypes = {
  data: [],
};

export default (state: InitialStateTypes = initialState, action: ActionTypes) => {
  switch (action.type) {
    case TESTDATA:
      return {
        ...state,
        data: action.json,
      };
    default:
      return state;
  }
};
