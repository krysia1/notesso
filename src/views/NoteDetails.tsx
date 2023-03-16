import {Box, Text, HStack, ChevronLeftIcon, useTheme} from 'native-base';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextBtn} from '../components/Button';

export const NoteDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const theme = useTheme();

  return (
    <Box flex={1} pt="5">
      <HStack width="100%" alignItems="center" justifyContent="space-between">
        <TextBtn
          onPress={() => navigation.navigate('Dashboard')}
          icon={
            <ChevronLeftIcon
              _light={{color: theme.colors.light['200']}}
              _dark={{color: theme.colors.dark['200']}}
            />
          }
          text={'Notes'}
        />
      </HStack>
      <Text
        fontFamily="Source Sans Pro"
        fontWeight="bold"
        fontSize={theme.fontSizes['2xl']}
        _light={{color: theme.colors.light['400']}}
        _dark={{color: theme.colors.dark['400']}}>
        NoteDetails:
      </Text>
    </Box>
  );
};
