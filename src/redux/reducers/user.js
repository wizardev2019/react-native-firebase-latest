// Checked by Matthew (Aug 11)

import * as types from '../actions/types';

const INITIAL_STATE = {
  seenExplainer: false,
};

// Sets or adds payload to the state.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Resets all fields
    case types.PASS_WELCOME:
      return {
        ...state,
        seenExplainer: true,
      };
    default:
      return state;
  }
};

export default userReducer;
