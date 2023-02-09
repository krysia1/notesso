import {AddIcon, Box, HStack, Pressable, Text, useTheme} from 'native-base';
import React from 'react';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      _light={{bg: theme.colors.primary['100']}}
      _dark={{bg: theme.colors.primary['400']}}>
      <HStack
        safeAreaBottom
        py="2"
        px="5"
        width="100%"
        alignItems="center"
        justifyContent="space-between">
        <Box />
        <Text
          ml="7"
          _light={{color: theme.colors.primary['900']}}
          _dark={{color: theme.colors.primary['50']}}
          fontFamily="Source Sans Pro"
          fontWeight={400}
          fontSize={theme.fontSizes.xl}>
          $3 Notes
        </Text>
        <Pressable
          rounded="3xl"
          _light={{bg: theme.colors.primary['400']}}
          _dark={{bg: theme.colors.secondary['500']}}
          p="2"
          onPress={() => {
            console.log('yoooo');
          }}>
          <AddIcon
            _light={{color: theme.colors.secondary['500']}}
            _dark={{color: theme.colors.primary['400']}}
          />
        </Pressable>
      </HStack>
    </Box>
  );
};
