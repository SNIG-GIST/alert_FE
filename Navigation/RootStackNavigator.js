import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Schedule_BottomTab">
        <RootStack.Screen
          name="Schedule_BottomTab"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
