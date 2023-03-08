import {
  Box,
  ChevronLeftIcon,
  HStack,
  Pressable,
  // ScrollView,
  Text,
  TextArea,
  useTheme,
} from 'native-base';
import React from 'react';
import {useNavigate} from 'react-router-native';
import {RoutingPath} from '../router/routes-paths';

export const NoteDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box flex={1} pt="5">
      <Pressable
        maxW={90}
        p="2"
        onPress={() => navigate(RoutingPath.dashboard)}>
        <HStack alignItems="center">
          <ChevronLeftIcon
            _light={{color: theme.colors.primary['400']}}
            _dark={{color: theme.colors.secondary['500']}}
          />
          <Text
            _light={{color: theme.colors.primary['400']}}
            _dark={{color: theme.colors.secondary['500']}}
            fontFamily="Source Sans Pro"
            fontWeight={400}
            fontSize={theme.fontSizes.xl}>
            Notes
          </Text>
        </HStack>
      </Pressable>
      {/* <ScrollView pt="2" safeAreaBottom> */}
      <Box flex={1} px="3" safeAreaBottom>
        <TextArea
          // flex={1}
          // flexWrap="wrap"
          variant="unstyled"
          // bg="white"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          fontSize={theme.fontSizes['4xl']}
          // _light={{color: theme.colors.primary['500']}}
          // _dark={{color: theme.colors.primary['50']}}
          // selectionColor="white"
          // autoCompleteType={undefined}
          // h={20}
          h="100%"
          autoCompleteType={undefined}
        />
      </Box>
      {/* </ScrollView> */}
    </Box>
  );
};
