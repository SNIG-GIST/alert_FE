import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import BottomTabNavigator from './BottomTabNavigator';
import StartingPage from '../pages/Login/StartingPage';
import LoginPage from '../pages/Login/LoginPage';
import SignupContainer from '../containers/SignUpContainer';
import LectureDetail from '../pages/Lecture/LectureDetail';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="StartingPage">
        <RootStack.Screen
          name="Schedule_BottomTab"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="StartingPage"
          component={StartingPage}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignupContainer}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="LectureDetail"
          component={LectureDetail}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
