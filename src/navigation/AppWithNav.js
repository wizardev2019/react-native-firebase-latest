import React from 'react';
import {View, StatusBar, NetInfo, AppState} from 'react-native';
import {connect} from 'react-redux';

import {routeActions} from '../redux/actions';
import {MainStack} from './RootNavigation';
import NavigatorService from './NavigationService';

class AppWithNavigationState extends React.Component {
  state = {
    appState: AppState.currentState,
  };

  // Adds listener to app state changes and hides splash screen after 1 second.
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  // Removes listener to app state changes
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  // Updates lock status based on app state changes
  _handleAppStateChange = nextAppState => {
    if (this.state.appState.match(/active/) && nextAppState === 'inactive') {
      console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
  };

  // Sets navigation state and saves to state
  _onChangeNavigationState = (prevState, currentState, action) => {
    console.log('Navigation Action Changed: ', action);
    const {routeName} = currentState.routes[currentState.index];
    // save route name
    this.props.setRouteName(routeName);
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        `Initial, type: ${connectionInfo.type}, effectiveType: ${
          connectionInfo.effectiveType
        }`,
      );
      if (connectionInfo.type === 'none') {
        alert(
          'No internet connection detected please try again with an active connection.',
        );
      }
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <MainStack
          ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
          }}
          onNavigationStateChange={this._onChangeNavigationState}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setRouteName: routeActions.setRouteName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppWithNavigationState);
