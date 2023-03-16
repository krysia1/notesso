import {Box, useTheme} from 'native-base';
import React from 'react';
import {INoteCard} from '../utils/interfaces';
import {NoteCardContent} from './NoteCardContent';

export const NoteCard = ({data}: INoteCard) => {
  const theme = useTheme();

  return (
    <Box
      _light={{bg: theme.colors.light['100']}}
      _dark={{bg: theme.colors.dark['100']}}
      px="3"
      height="20"
      my="2"
      rounded="2xl"
      justifyContent="center">
      <NoteCardContent title={data.title} note={data.note} />
    </Box>
  );
};
