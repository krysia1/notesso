import {AddIcon, Box, HStack, Pressable, Text, useTheme} from 'native-base';
import React from 'react';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      _light={{bg: theme.colors.primary['500']}}
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
          color={theme.colors.primary['50']}
          fontFamily="Source Sans Pro"
          fontWeight={400}
          fontSize={theme.fontSizes.xl}>
          $3 Notes
        </Text>
        <Pressable
          onPress={() => {
            console.log('yoooo');
          }}>
          <AddIcon color={theme.colors.primary['50']} />
        </Pressable>
      </HStack>
    </Box>
  );
};
