import React, {useState} from 'react';
import TimeTableView, {genTimeBlock} from 'react-native-timetable';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

const Calender = () => {
  const numOfDays = 5;
  const pivotDate = genTimeBlock('MON');

  const onEventPress = e => {
    Alert.alert('onEventPress', JSON.stringify(e));
  };

  const events_data = [
    {
      title: 'Something',
      startTime: genTimeBlock('MON', 10),
      endTime: genTimeBlock('MON', 12),
      location: 'HI',
    },
  ];

  return (
    <View style={styles.calenderWrapper}>
      <TimeTableView
        events={events_data}
        pivotTime={9}
        pivotEndTime={20}
        pivotDate={pivotDate}
        nDays={numOfDays}
        onEventPress={onEventPress}
        headerStyle={styles.headerStyle}
        formatDateHeader="dddd"
        locale="ko"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calenderWrapper: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '70%',
  },
  headerStyle: {
    backgroundColor: '#81E1B8',
  },
});

export default Calender;
