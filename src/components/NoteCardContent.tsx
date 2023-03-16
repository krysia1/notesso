import {Box, Text, useTheme} from 'native-base';
import React from 'react';
import {INote} from '../utils/interfaces';

export const NoteCardContent = ({
  title,
  note,
}: Pick<INote, 'title' | 'note'>) => {
  const theme = useTheme();
  return (
    <Box>
      <Text
        _light={{color: theme.colors.light['400']}}
        _dark={{color: theme.colors.dark['400']}}
        fontFamily="Source Sans Pro"
        fontWeight="bold"
        fontSize={theme.fontSizes.xl}>
        {title.slice(0, 34)}
        {title.length > 34 ? '...' : ''}
      </Text>
      <Text
        _light={{color: theme.colors.light['400']}}
        _dark={{color: theme.colors.dark['400']}}
        fontFamily="Source Sans Pro"
        fontSize={theme.fontSizes.lg}>
        {note.slice(0, 42)}
        {note.length > 42 ? '...' : ''}
      </Text>
    </Box>
  );
};
