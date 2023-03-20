import React from 'react';
import {Footer, NotesList} from '../components';
import {Box} from 'native-base';

export const Dashboard = () => {
  return (
    <Box flex={1}>
      <NotesList />
      <Footer />
    </Box>
  );
};
