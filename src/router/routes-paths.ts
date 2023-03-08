export enum RoutingPathEnum {
  Dashboard = 'dashboard',
  NoteDetails = 'noteDetails',
}
export const RoutingPath = {
  [RoutingPathEnum.Dashboard]: '/',
  [RoutingPathEnum.NoteDetails]: '/note-details',
} as const;

export type RoutingPath = (typeof RoutingPath)[keyof typeof RoutingPath];
