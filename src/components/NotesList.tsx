import {Box, FlatList, Pressable} from 'native-base';
import React, {useState, useEffect} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {firebase} from '../config';
import {NoteCard} from '.';
import {INote} from '../utils/interfaces';

export const NotesList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('NoteDetails', {item})}>
            <NoteCard data={item} />
          </Pressable>
        )}
      />
    </Box>
  );
};
