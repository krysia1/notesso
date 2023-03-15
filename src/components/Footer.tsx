import {AddIcon, Box, HStack, Text, useTheme} from 'native-base';
import React from 'react';
import {useNavigate} from 'react-router-native';
import {RoutingPath} from '../router/routes-paths';
import {CircleBtn} from './Button';

export const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  //TODO: add react-native-blur to blur the Footer and leave the NoteList scroll behind it

  return (
    <Box
      _light={{bg: theme.colors.light['100']}}
      _dark={{bg: theme.colors.dark['100']}}>
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
          _light={{color: theme.colors.light['300']}}
          _dark={{color: theme.colors.dark['300']}}
          fontFamily="Source Sans Pro"
          fontWeight={400}
          fontSize={theme.fontSizes.xl}>
          $3 Notes
        </Text>
        <CircleBtn
          onPress={() => navigate(RoutingPath.noteDetails)}
          icon={
            <AddIcon
              _light={{color: theme.colors.light['100']}}
              _dark={{color: theme.colors.dark['100']}}
            />
          }
        />
      </HStack>
    </Box>
  );
};
