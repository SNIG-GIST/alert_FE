import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Evaluation = () => {
  return (
    <View style={styles.MyLectureWrapper}>
      <View style={styles.MyLectureData}>
        <Text style={styles.MyLectureDataTitle}>
          EB2753-01/기술 벤처 창업론
        </Text>
        <Text style={styles.MyLectureDataText}>
          진규호 / 월 16:00~17:30/ 수 16:00~17:30
        </Text>
      </View>
      <View style={styles.MyLectureDelete}>
        <Text style={styles.MyLectureDeleteText}>Write</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MyLectureWrapper: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  MyLectureData: {
    backgroundColor: '#1B222E',
    padding: '3%',
    width: '78%',
    justifyContent: 'center',
    marginLeft: '3.5%',
  },
  MyLectureDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6E52FC',
    width: '15%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  MyLectureDataTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: '1.5%',
  },
  MyLectureDataText: {
    color: '#FFFFFF',
    fontSize: 10,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
    opacity: 0.7,
  },
  MyLectureDeleteText: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});

export default Evaluation;
