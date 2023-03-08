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
      _light={{bg: theme.colors.secondary['200']}}
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
        <CircleBtn
          onPress={() => navigate(RoutingPath.noteDetails)}
          icon={
            <AddIcon
              _light={{color: theme.colors.primary['500']}}
              _dark={{color: theme.colors.primary['400']}}
            />
          }
        />
      </HStack>
    </Box>
  );
};
