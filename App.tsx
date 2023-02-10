import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/config/theme';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {routing} from './src/router/routes-config';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NativeRouter>
        <Routes>
          {routing.map(e => (
            <Route key={e.path} path={e.path} element={e.view} />
          ))}
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
