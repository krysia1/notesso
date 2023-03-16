import React from 'react';
import {HStack, Pressable, Text, useTheme} from 'native-base';
import {IBtn} from '../utils/interfaces';

export const TextBtn = ({onPress, icon, text}: IBtn) => {
  const theme = useTheme();
  return (
    <Pressable maxW={90} p="2" onPress={onPress}>
      <HStack alignItems="center">
        {icon}
        <Text
          _light={{color: theme.colors.light['200']}}
          _dark={{color: theme.colors.dark['200']}}
          px="1"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          fontSize={theme.fontSizes.xl}>
          {text}
        </Text>
      </HStack>
    </Pressable>
  );
};

export const CircleBtn = ({onPress, icon}: IBtn) => {
  const theme = useTheme();
  return (
    <Pressable
      rounded="3xl"
      _light={{bg: theme.colors.light['200']}}
      _dark={{bg: theme.colors.dark['200']}}
      p="2"
      onPress={onPress}>
      {icon}
    </Pressable>
  );
};
