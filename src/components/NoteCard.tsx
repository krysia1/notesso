import {Box, useTheme} from 'native-base';
import React from 'react';
import {INoteCard} from '../utils/interfaces';
import {NoteContent} from './NoteContent';

export const NoteCard = ({data}: INoteCard) => {
  const theme = useTheme();

  return (
    <Box
      _light={{bg: theme.colors.secondary['100']}}
      _dark={{bg: theme.colors.primary['300']}}
      p="2"
      height="20"
      my="2"
      rounded="2xl"
      justifyContent="center">
      <NoteContent title={data.title} note={data.note} />
    </Box>
  );
};
