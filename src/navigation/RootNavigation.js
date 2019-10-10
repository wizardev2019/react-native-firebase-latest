import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from '../containers/Welcome';

// Nav stack for existing user
const MainAppStack = createStackNavigator(
  {
    WELCOME: {
      screen: WelcomeScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export const MainStack = createAppContainer(MainAppStack);
