import {Box, ChevronLeftIcon, Input, HStack, useTheme} from 'native-base';
import React, {useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useNavigate} from 'react-router-native';
import {TextBtn} from '../components/Button';
import {RoutingPath} from '../router/routes-paths';
import {firebase} from '../config';

export const NewNote = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    firebase
      .firestore()
      .collection('notes')
      .add({
        title,
        note,
      })
      .then(() => {
        setTitle('');
        setNote('');
        Keyboard.dismiss();
        navigate(RoutingPath.dashboard);
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  return (
    <Box flex={1} pt="5">
      <HStack width="100%" alignItems="center" justifyContent="space-between">
        <TextBtn
          onPress={() => navigate(RoutingPath.dashboard)}
          icon={
            <ChevronLeftIcon
              _light={{color: theme.colors.light['200']}}
              _dark={{color: theme.colors.dark['200']}}
            />
          }
          text={'Notes'}
        />
        <TextBtn onPress={() => handleAdd()} text={'Done'} />
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
