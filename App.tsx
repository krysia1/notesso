import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Box, NativeBaseProvider, View} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {theme} from './src/config';
import {Dashboard, NewNote, NoteDetails} from './src/views';
import {Header} from './src/components';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        <View
          flex={1}
          _light={{bg: theme.colors.light['50']}}
          _dark={{bg: theme.colors.dark['50']}}>
          <Box h="100%" justifyContent="space-between">
            <Header />
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Dashboard">
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="NewNote" component={NewNote} />
              <Stack.Screen name="NoteDetails" component={NoteDetails} />
            </Stack.Navigator>
          </Box>
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
