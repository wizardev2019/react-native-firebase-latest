import React from 'react';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppWithNav from './src/navigation/AppWithNav';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
console.disableYellowBox = true;

export const App = () => (
  <Provider store={store}>
    <AppWithNav />
  </Provider>
);
