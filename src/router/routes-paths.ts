export const RoutingPath = {
  dashboard: '/',
  noteDetails: '/note-details',
} as const;

export type RoutingPath = (typeof RoutingPath)[keyof typeof RoutingPath];
