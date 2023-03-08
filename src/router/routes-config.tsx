import React from 'react';
import {Dashboard, NoteDetails} from '../views';
import {RoutingPath} from './routes-paths';

interface IRouting {
  path: RoutingPath;
  view: JSX.Element;
}

export const routing: IRouting[] = [
  {
    path: RoutingPath.dashboard,
    view: <Dashboard />,
  },
  {
    path: RoutingPath.noteDetails,
    view: <NoteDetails />,
  },
];
