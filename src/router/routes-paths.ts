export const RoutingPath = {
  dashboard: '/',
} as const;

export type RoutingPath = (typeof RoutingPath)[keyof typeof RoutingPath];
