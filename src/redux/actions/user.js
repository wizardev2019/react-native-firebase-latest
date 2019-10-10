// Checked by Matthew (Aug 11)

import firebase from 'react-native-firebase';
import * as types from './types';

export const passWelcome = () => ({
  type: types.PASS_WELCOME,
});

export const register = param => (dispatch, getState) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(param.email, param.password)
    .then(user => {
      console.log('User Data', user);
    })
    .catch(e => {
      console.log('Register Error', e);
    });
};
