import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import TimeTableView from './timetable/TimeTable/TimeTableView';
import {genTimeBlock} from './timetable/utils';

const Calender = () => {
    const numOfDays = 5;
    const pivotDate = genTimeBlock('MON');

    const onEventPress = e => {
        Alert.alert('onEventPress', JSON.stringify(e));
    };

    const events_data = [
        {
            title: '기업과 사회',
            startTime: genTimeBlock('MON', 10),
            endTime: genTimeBlock('MON', 11, 30),
            location: '장진호T',
            extra_description: '과목코드',
        },
        {
            title: '기업과 사회',
            startTime: genTimeBlock('TUE', 13, 30),
            endTime: genTimeBlock('TUE', 15),
            location: '장진호T',
        },
        {
            title: '글쓰기',
            startTime: genTimeBlock('THU', 12),
            endTime: genTimeBlock('THU', 13, 30),
            location: '최서윤T',
        },
        {
            title: '컴퓨터 프로그래밍',
            startTime: genTimeBlock('THU', 9),
            endTime: genTimeBlock('THU', 10, 30),
            location: '최서윤T',
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
        backgroundColor: '#141414',
        marginTop: '5%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '100%',
        height: '60%',
    },
    headerStyle: {
        backgroundColor: '#141414',
    },
});

export default Calender;
