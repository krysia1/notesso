import {Box, Input, HStack, ChevronLeftIcon, useTheme} from 'native-base';
import React, {useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextBtn} from '../components/Button';
import {firebase} from '../config';

export const NoteDetails = ({route}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const theme = useTheme();

  const [title, setTitle] = useState(route.params.item.title);
  const [note, setNote] = useState(route.params.item.note);

  //TODO: add saving on navigating back to Dashboard
  //TODO: add deleting if note is empty
  //TODO: add proper animation to move between screens
  //TODO: refactor details and newNote to use generic components/funcs
  //TODO: change number of notes to be dynamic not hardcoded

  const handleUpdate = () => {
    firebase
      .firestore()
      .collection('notes')
      .doc(route.params.item.id)
      .update({title: title, note: note})
      .then(() => {
        Keyboard.dismiss();
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  // const handleDelete = () => {
  //   firebase
  //     .firestore()
  //     .collection('notes')
  //     .doc(route.params.item.id)
  //     .delete()
  //     .then(() => {
  //       Keyboard.dismiss();
  //       navigation.navigate('Dashboard');
  //     })
  //     .catch(error => {
  //       Alert.alert(error);
  //     });
  // };

  return (
    <Box flex={1} pt="5">
      <HStack width="100%" alignItems="center" justifyContent="space-between">
        <TextBtn
          onPress={() => navigation.navigate('Dashboard')}
          icon={
            <ChevronLeftIcon
              _light={{color: theme.colors.light['200']}}
              _dark={{color: theme.colors.dark['200']}}
            />
          }
          text={'Notes'}
        />
        <TextBtn onPress={() => handleUpdate()} text={'Done'} />
      </HStack>
      <Box flex={1} px="3" safeAreaBottom>
        <Input
          variant="unstyled"
          fontFamily="Source Sans Pro"
          fontWeight="bold"
          fontSize={theme.fontSizes['2xl']}
          _light={{color: theme.colors.light['400']}}
          _dark={{color: theme.colors.dark['400']}}
          multiline={true}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Input
          variant="unstyled"
          fontFamily="Source Sans Pro"
          fontSize={theme.fontSizes.xl}
          _light={{color: theme.colors.light['400']}}
          _dark={{color: theme.colors.dark['400']}}
          value={note}
          onChangeText={text => setNote(text)}
          multiline={true}
        />
      </Box>
    </Box>
  );
};
