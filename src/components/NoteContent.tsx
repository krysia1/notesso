import {Box, Text, useTheme} from 'native-base';
import React from 'react';
import {INote} from '../utils/interfaces';

export const NoteContent = ({title, note}: Pick<INote, 'title' | 'note'>) => {
  const theme = useTheme();
  return (
    <Box>
      <Text
        _light={{color: theme.colors.primary['400']}}
        _dark={{color: theme.colors.secondary['500']}}
        fontFamily="Source Sans Pro"
        fontSize={theme.fontSizes.xl}>
        {title.slice(0, 38)}
        {title.length > 38 ? '...' : ''}
      </Text>
      <Text
        _light={{color: theme.colors.primary['300']}}
        _dark={{color: theme.colors.primary['50']}}
        fontFamily="Source Sans Pro"
        fontSize={theme.fontSizes.lg}>
        {note.slice(0, 40)}
        {note.length > 40 ? '...' : ''}
      </Text>
    </Box>
  );
};
