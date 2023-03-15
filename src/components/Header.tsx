import {
  HStack,
  MoonIcon,
  Pressable,
  StatusBar,
  SunIcon,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
} from 'native-base';
import React from 'react';

export const Header = () => {
  const theme = useTheme();
  const {toggleColorMode} = useColorMode();

  const statusBarColorMode = useColorModeValue('dark-content', 'light-content');
  const StatusBarBackgroundColor = useColorModeValue(
    theme.colors.light['50'],
    theme.colors.dark['50'],
  );

  const icon = useColorModeValue(
    <MoonIcon color={theme.colors.light['300']} size="6" />,
    <SunIcon color={theme.colors.dark['300']} size="6" />,
  );

  return (
    <>
      <StatusBar
        backgroundColor={StatusBarBackgroundColor}
        barStyle={statusBarColorMode}
      />
      <HStack
        safeAreaTop
        width="100%"
        pl="3"
        pr="5"
        alignItems="center"
        justifyContent="space-between">
        <Text
          _light={{color: theme.colors.light['200']}}
          _dark={{color: theme.colors.dark['200']}}
          fontFamily="Codystar"
          fontWeight={400}
          fontSize={theme.fontSizes['4xl']}>
          Notesso
        </Text>
        <Pressable onPress={toggleColorMode}>{icon}</Pressable>
      </HStack>
    </>
  );
};
