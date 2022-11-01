import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.colorPrimary,
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
