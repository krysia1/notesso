import React from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';

const MainPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{color: 'white'}}>Hello! it's Notesso App!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
