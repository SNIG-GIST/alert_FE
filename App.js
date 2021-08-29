import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Schedule from './pages/Schedule';
import {SafeAreaView, Text} from 'react-native';

const ScheduleScreen = () => {
  return <Schedule />;
};

const LectureScreen = () => {
  return <Schedule />;
};

const ProfileScreen = () => {
  return <Schedule />;
};

const App = () => {
  return <Schedule />;
};

export default App;
