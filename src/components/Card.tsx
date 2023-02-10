import {Box, Text, useTheme} from 'native-base';
import React from 'react';

export const Card = () => {
  const theme = useTheme();

  return (
    <Box
      _light={{bg: theme.colors.secondary['100']}}
      _dark={{bg: theme.colors.primary['300']}}
      // bg={theme.colors.primary['400']}
      width="100%"
      p="2"
      height="20"
      m="3"
      rounded="lg"
      justifyContent="center">
      <Text
        // color={theme.colors.secondary['500']}
        _light={{color: theme.colors.primary['400']}}
        _dark={{color: theme.colors.secondary['500']}}
        fontFamily="Source Sans Pro"
        fontSize={theme.fontSizes['3xl']}>
        Eloo
      </Text>
    </Box>
  );
};
