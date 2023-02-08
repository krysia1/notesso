/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
// import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, View} from 'react-native';
import MainPage from './MainPage';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    // <NavigationContainer>
    <View style={{backgroundColor: '#190520'}}>
      <StatusBar backgroundColor="#190520" barStyle="light-content" />
      <MainPage />
    </View>
    // </NavigationContainer>
  );
};

export default App;
