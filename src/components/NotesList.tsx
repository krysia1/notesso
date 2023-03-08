import {Box, FlatList} from 'native-base';
import React, {useState, useEffect} from 'react';
import {firebase} from '../config';
import {NoteCard} from '.';
import {INote} from '../utils/interfaces';

export const NotesList = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(querySnapshot => {
        const newNotes: INote[] = [];
        querySnapshot.forEach(doc => {
          const {note, title} = doc.data();
          newNotes.push({note, title, id: doc.id});
        });
        setNotes(newNotes);
      });
  }, []);

  return (
    <Box flex={1} p="5">
      <FlatList
        data={notes}
        renderItem={({item}) => <NoteCard data={item} />}
      />
    </Box>
  );
};
