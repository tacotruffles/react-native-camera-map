import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

// Register App Screens
Navigation.registerComponent('camera-map.AuthScreen', () => AuthScreen);

// Star App - single screen for now
Navigation.startSingleScreenApp({
  screen: {
    screen: "camera-map.AuthScreen",
    title: "Login"
  }
});
