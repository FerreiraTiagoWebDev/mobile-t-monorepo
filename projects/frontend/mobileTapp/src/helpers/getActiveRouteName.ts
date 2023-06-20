import type { NavigationState } from '@react-navigation/native';

const getActiveRouteName = (
  state: NavigationState<any> | Partial<NavigationState<any>> | undefined
): string => {
  if (!state || typeof state.index !== 'number') {
    return 'Unknown';
  }

  const route = (state as NavigationState<any>).routes[state.index];

  if (route?.state) {
    return getActiveRouteName(route.state as NavigationState<any>);
  }

  return route?.name ?? 'Unknown';
};

export default getActiveRouteName;