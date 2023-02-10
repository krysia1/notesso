import {Box, ScrollView} from 'native-base';
import React from 'react';
import {Card} from '.';

export const NotesList = () => {
  return (
    <Box flex={1} py="5">
      <ScrollView pt="2">
        <Box alignItems="center" justifyContent="center" bg="white" px="2">
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
