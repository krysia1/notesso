import {View, StatusBar, useColorModeValue, useTheme} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';

const Dashboard = () => {
  const theme = useTheme();

  const statusBarColorMode = useColorModeValue('dark-content', 'light-content');
  const StatusBarBackgroundColor = useColorModeValue(
    theme.colors.primary['50'],
    theme.colors.primary['500'],
  );

  return (
    <View
      flex={1}
      _light={{bg: theme.colors.primary['50']}}
      _dark={{bg: theme.colors.primary['500']}}>
      <StatusBar
        backgroundColor={StatusBarBackgroundColor}
        barStyle={statusBarColorMode}
      />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
