import React from 'react';
import LectureItem from './LectureItem';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

const LectureList = () => {
  return (
    <ScrollView
      style={styles.ScrollLecture}
      scrollEventThrottle={0}
      onScroll={e => {
        let paddingToBottom = 1;
        // 현재 보여지는 화면의 높이값
        paddingToBottom += e.nativeEvent.layoutMeasurement.height;
        // 현재 스크롤 값 + 현재 보여지는 화면의 높이 값 >= 전체 문서의 높이
        // paddingToBottom 을 살짝 높게 잡아 에러 핸들링
        if (
          e.nativeEvent.contentOffset.y + paddingToBottom >=
          e.nativeEvent.contentSize.height
        ) {
          console.log('Scroll End');
        }
      }}>
      <TouchableOpacity>
        <TouchableWithoutFeedback>
          <View>
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
            <LectureItem />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollLecture: {
    marginTop: '7%',
  },
});

export default LectureList;
