import {useTheme, View, Box} from 'native-base';
import React from 'react';
import {Header} from './Header';

export interface IViewWrapper {
  child: JSX.Element;
}

export const ViewWrapper = ({child}: IViewWrapper) => {
  const theme = useTheme();
  return (
    <View
      flex={1}
      _light={{bg: theme.colors.secondary['50']}}
      _dark={{bg: theme.colors.primary['500']}}>
      <Box h="100%" justifyContent="space-between">
        <Header />
        {child}
      </Box>
    </View>
  );
};
