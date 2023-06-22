const mapping: Record<string, string> = {
  cars: 'car',
  dealerships: 'dealership',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
