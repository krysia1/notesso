import {View, useTheme, Box} from 'native-base';
import React from 'react';
import {Header, Footer, NotesList} from '../components';

export const Dashboard = () => {
  const theme = useTheme();

  return (
    <View
      flex={1}
      _light={{bg: theme.colors.primary['50']}}
      _dark={{bg: theme.colors.primary['500']}}>
      <Box h="100%" justifyContent="space-between">
        <Header />
        <NotesList />
        <Footer />
      </Box>
    </View>
  );
};
