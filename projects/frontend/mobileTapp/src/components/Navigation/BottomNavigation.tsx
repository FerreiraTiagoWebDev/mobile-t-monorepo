import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactNode} from 'react';
import {useTheme} from 'styled-components';

// import { I18n } from '@/fsa/helpers'
import {APPOINTMENT_TABS, COLORS} from '@/mobileTapp/constants';

import AppointmentListContainer from '@/mobileTapp/containers/Appointment/AppointmentListContainer';

// import NavigationHeader from '@/mobileTapp/components/Navigation/NavigationHeader';
import TabBarIcon from '@/mobileTapp/components/TabBarIcon';
import {Platform} from 'react-native';

interface ScreensType {
  name: string;
  component: any;
  initialParams?: {tab: APPOINTMENT_TABS};
  tabBarLabel?: string;
  display: boolean;
}

const transformUppercase = (text: string) => text.toUpperCase();

const screens: ScreensType[] = [
  {
    name: 'Unplanned',
    component: AppointmentListContainer,
    initialParams: {tab: APPOINTMENT_TABS.UNPLANNED},
    tabBarLabel: transformUppercase('test'),
    display: true,
  },
];

const BottomNavigation = ({header}: {header: string | null}) => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_DARK,
        tabBarStyle: {height: Platform.OS === 'android' ? 85 : 95},
        tabBarLabelStyle: {
          fontFamily: theme.font.fontFamily.bold,
          fontSize: 12,
          marginBottom: Platform.OS === 'android' ? 17 : 0,
        },
        headerStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
        // headerTitle: () => <NavigationHeader header={header} />,
        headerTintColor: COLORS.WHITE,
        unmountOnBlur: true,
      }}>
      {screens.map(screen => {
        const {name, component, display, initialParams, tabBarLabel} = screen;
        return (
          <Tab.Screen
            name={name}
            component={component as any}
            initialParams={initialParams ?? undefined}
            options={{
              tabBarLabel: tabBarLabel,
              tabBarIcon: ({focused, color}) => (
                <TabBarIcon
                  tab={initialParams?.tab}
                  focused={focused}
                  color={color}
                />
              ),
              tabBarItemStyle: {display: display ? 'flex' : 'none'},
            }}
            key={name}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
