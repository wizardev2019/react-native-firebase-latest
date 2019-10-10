// Checked by Matthew (Aug 11)

import * as types from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  screenName: '',
};

const routerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_SCREEN:
      return {
        ...state,
        screenName: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default routerReducer;
