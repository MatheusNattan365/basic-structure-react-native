import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import AuthLoadingScreen from './src/screens/AuthTeste'; -----Function Component
import AuthLoadingScreen from './src/screens/Auth/AuthLoading';

import SignInScreen from './src/screens/Auth/Login';
import SignUpScreen from './src/screens/Auth/Register';
import HomeScreen from './src/screens/App-DrawerNav/Home';


const AppStack = createDrawerNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

