import {ReactElement} from 'react';
import {GestureResponderEvent} from 'react-native/types';

export interface INote {
  id: string;
  title: string;
  note: string;
}

export interface INoteCard {
  data: INote;
}

export interface IBtn {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  icon?: ReactElement;
  text?: string;
}
