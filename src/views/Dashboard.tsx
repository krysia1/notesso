import {View, useTheme} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <View
      flex={1}
      _light={{bg: theme.colors.primary['50']}}
      _dark={{bg: theme.colors.primary['500']}}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
