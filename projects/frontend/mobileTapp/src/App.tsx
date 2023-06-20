import LoginContainer from '@/mobileTapp/containers/Login/LoginContainer';
import defaultTheme from '@/mobileTapp/globalStyles';
import {getActiveRouteName} from '@/mobileTapp/helpers';
import {navigationRef} from '@/mobileTapp/helpers/RootNavigation';
import type {NavigationState} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';

function App(): JSX.Element {
  const Stack = createStackNavigator<NavigationProps>();

  const [currentRoute, setCurrentRoute] = useState('Unknown');

  const onNavigationStateChange = (
    state: NavigationState | Partial<NavigationState> | undefined,
  ) => {
    const newRoute = getActiveRouteName(state);
    if (currentRoute !== newRoute) {
      setCurrentRoute(newRoute);
    }
  };
  // todo
  const initialRoute = 'Login';

  return (
    <ThemeProvider theme={defaultTheme as DefaultTheme}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={onNavigationStateChange}>
        <Stack.Navigator
          initialRouteName={initialRoute}
          // screenListeners={{
          //   state: () => {
          //     // clear errors on page change
          //     clearErrors()
          //   },
          // }}
        >
          <Stack.Screen
            name="Login"
            component={LoginContainer}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="MainTabs"
            component={MainTabsContainer}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
