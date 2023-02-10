import {Box, ScrollView} from 'native-base';
import React from 'react';
import {Card} from '.';

export const NotesList = () => {
  return (
    <Box flex={1} py="5">
      <ScrollView pt="2">
        <Box alignItems="center" justifyContent="center" px="3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </ScrollView>
    </Box>
  );
};
