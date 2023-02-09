// import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Dashboard from './src/views/Dashboard';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/config/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <Dashboard />
    </NativeBaseProvider>
    // </NavigationContainer>
  );
};

export default App;
