// Checked by Matthew (Aug 11)

import * as types from './types';

// Sets route name based on flowStructure
export const setRouteName = routeName => ({
  type: types.SET_CURRENT_SCREEN,
  payload: routeName,
});

export const setLoading = status => ({
  type: types.SET_LOADING,
  payload: status,
});
