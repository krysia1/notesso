// import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainPage from './pages/MainPage';
import {NativeBaseProvider} from 'native-base';
import {theme} from './config/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <MainPage />
    </NativeBaseProvider>
    // </NavigationContainer>
  );
};

export default App;
