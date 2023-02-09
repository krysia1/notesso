import {
  MoonIcon,
  Pressable,
  Row,
  SunIcon,
  Text,
  useColorMode,
  useColorModeValue,
  useTheme,
} from 'native-base';
import React from 'react';

const Header = () => {
  const theme = useTheme();
  const {toggleColorMode} = useColorMode();

  const icon = useColorModeValue(
    <MoonIcon color={theme.colors.primary['400']} size="6" />,
    <SunIcon color={theme.colors.primary['50']} size="6" />,
  );

  return (
    <Row
      width="100%"
      pl="3"
      pr="5"
      alignItems="center"
      justifyContent="space-between">
      <Text
        _light={{color: theme.colors.primary['500']}}
        _dark={{color: theme.colors.secondary['500']}}
        fontFamily="Codystar"
        fontWeight={400}
        fontSize={theme.fontSizes['4xl']}>
        Notesso
      </Text>
      <Pressable onPress={toggleColorMode}>{icon}</Pressable>
    </Row>
  );
};

export default Header;
