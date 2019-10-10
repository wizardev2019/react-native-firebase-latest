import {NavigationParams, NavigationActions} from 'react-navigation';

let _container // eslint-disable-line

// Sets reference to navigation container
const setContainer = container => {
  _container = container;
};

const getContainer = () => _container;

// Resets route
const reset = (routeName, params = NavigationParams) => {
  _container.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
};

// Navigates to new route
const navigate = (routeName, params = NavigationParams) => {
  _container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
};

// Returns current route
const getCurrentRoute = () => {
  if (!_container || !_container.state.nav) {
    return null;
  }
  return _container.state.nav.routes[_container.state.nav.index] || null;
};

// Goes back to previous screen
const goBack = () => {
  if (_container) {
    const action = NavigationActions.back({});
    _container.dispatch(action);
  }
};

export default {
  setContainer,
  navigate,
  reset,
  getCurrentRoute,
  goBack,
  getContainer,
};
