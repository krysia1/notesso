import {
  AddIcon,
  Box,
  HStack,
  Text,
  useTheme,
  useColorModeValue,
} from 'native-base';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CircleBtn} from './Button';

export const Footer = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const FooterBackgroundColor = useColorModeValue(
    theme.colors.light['100'],
    theme.colors.dark['100'],
  );

  //TODO: fix react-native-blur on Android

  return (
    <Box position="absolute" left={0} bottom={0} width="100%">
      <BlurView
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
        blurType="light"
        blurAmount={6}
        overlayColor={FooterBackgroundColor}
        reducedTransparencyFallbackColor={FooterBackgroundColor}
      />
      <Box
        position="absolute"
        left={0}
        bottom={0}
        width="100%"
        height="100%"
        _light={{bg: theme.colors.light['100']}}
        _dark={{bg: theme.colors.dark['100']}}
        opacity={0.7}
      />
      <Box>
        <HStack
          safeAreaBottom
          py="2"
          px="5"
          // width="100%"
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
            onPress={() => navigation.navigate('NewNote')}
            icon={
              <AddIcon
                _light={{color: theme.colors.light['100']}}
                _dark={{color: theme.colors.dark['100']}}
              />
            }
          />
        </HStack>
      </Box>
    </Box>
  );
};
