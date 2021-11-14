import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();
import SchedulePage from '../pages/SchedulePage.js';
import LecturePage from '../pages/Lecture/LecturePage.js';
import ProfilePage from '../pages/ProfilePage.js';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName, iconColor, iconSize;
          if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
            iconColor = focused ? '#52A0F8' : 'grey';
            iconSize = focused ? 35 : 28;
            return (
              <Ionicons name={iconName} color={iconColor} size={iconSize} />
            );
          } else if (route.name === 'Lecture') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
            iconColor = focused ? '#52A0F8' : 'grey';
            iconSize = focused ? 35 : 30;
            return (
              <Ionicons name={iconName} color={iconColor} size={iconSize} />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused ? '#52A0F8' : 'grey';
            iconSize = focused ? 35 : 30;
            return (
              <Ionicons name={iconName} color={iconColor} size={iconSize} />
            );
          }
        },
        tabBarBackground: () => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#1B222E',
              width: '100%',
              height: '100%',
            }}
          />
        ),
        tabBarStyle: {height: '11%'},
        tabBarItemStyle: {paddingTop: 3},
        tabBarLabelStyle: {fontSize: 13},
        tabBarActiveTintColor: '#52A0F8',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen
        name="Schedule"
        component={SchedulePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lecture"
        component={LecturePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
