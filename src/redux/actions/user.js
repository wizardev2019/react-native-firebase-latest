// Checked by Matthew (Aug 11)

import firebase from 'react-native-firebase';
import * as types from './types';
import {setLoading} from './route';

export const passWelcome = () => ({
  type: types.PASS_WELCOME,
});

export const register = param => (dispatch, getState) => {
  dispatch(setLoading(true));
  firebase
    .auth()
    .createUserWithEmailAndPassword(param.email, param.password)
    .then(user => {
      dispatch(setLoading(false));
      console.log('User Data', user);
      alert('You signed up as ' + user.user.email);
    })
    .catch(e => {
      console.log('Register Error', e);
      if (e.toString().indexOf('The email address is already in use') > -1) {
        firebase
          .auth()
          .signInWithEmailAndPassword(param.email, param.password)
          .then(user => {
            dispatch(setLoading(false));
            console.log('User Data', user);
            alert('You signed in as ' + user.user.email);
          })
          .catch(e => {
            dispatch(setLoading(false));
            alert(e.toString());
          });
      } else {
        dispatch(setLoading(false));
        alert(e.toString());
      }
    });
};

export const checkNebzyData = () => (dispatch, getState) => {
  firebase
    .auth()
    .signInAnonymously()
    .then(user => {
      console.log('User Data', user);
      const ref = firebase.database().ref('/Wall');
      // ref.remove();
      ref.on('value', snapshot => {
        let messages = [];
        if (snapshot.val()) {
          messages = snapshot.val();
          alert(Object.keys(messages).length);
        } else {
          alert(snapshot.val());
        }
      });
    })
    .catch(e => {
      console.log('Register Error', e);
    });
};
