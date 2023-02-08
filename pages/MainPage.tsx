import {
  Box,
  Button,
  StatusBar,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
} from 'native-base';
import React from 'react';
// import {Text, SafeAreaView, ScrollView, View} from 'react-native';

const MainPage = () => {
  const theme = useTheme();
  const {toggleColorMode} = useColorMode();

  const statusBarColorMode = useColorModeValue('dark-content', 'light-content');
  const backgroundColorMode = useColorModeValue(
    theme.colors.primary['50'],
    theme.colors.primary['500'],
  );
  const textColorMode = useColorModeValue('black', 'white');

  return (
    <Box
      flex={1}
      bg={backgroundColorMode}
      alignItems="center"
      justifyContent="center">
      <StatusBar
        backgroundColor={backgroundColorMode}
        barStyle={statusBarColorMode}
      />
      <Text color={textColorMode}>Hello! it's Notesso App!</Text>
      <Button onPress={toggleColorMode} h={10}>
        Toggle
      </Button>
    </Box>
  );
};

export default MainPage;
