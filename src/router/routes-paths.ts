export enum RoutingPathEnum {
  Dashboard = 'dashboard',
  NewNote = 'newNote',
}
export const RoutingPath = {
  [RoutingPathEnum.Dashboard]: '/',
  [RoutingPathEnum.NewNote]: '/new-note',
} as const;

export type RoutingPath = (typeof RoutingPath)[keyof typeof RoutingPath];
