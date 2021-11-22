import React, {useState} from 'react';
import LectureItem from './LectureItem';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const LectureList = ({SearchResult, LectureSearch}) => {
  // LectureList(year=2021, semester=2, day, department, keyword, start_idx, size=10)
  const [list, setList] = useState(SearchResult);
  const [idx, setIdx] = useState(10);

  return (
    <>
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
            LectureSearch('', '', '', '', '', idx);
            setList(list.concat(SearchResult));
          }
        }}>
        <TouchableOpacity>
          <TouchableWithoutFeedback>
            <View>
              {list.map((item, index) => {
                return (
                  <LectureItem
                    key={index}
                    description={item.description}
                    title={item.title}
                    uuid={item.uuid}
                  />
                );
              })}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ScrollLecture: {
    marginTop: '7%',
  },
});

export default LectureList;
