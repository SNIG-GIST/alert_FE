import React, {useState} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LectureItem = ({description, title, uuid}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.MyLectureWrapper}>
      <View style={styles.MyLectureData}>
        <Text style={styles.MyLectureDataTitle}>{title}</Text>
        <Text style={styles.MyLectureDataText}>{description}</Text>
      </View>
      <TouchableOpacity
        style={styles.MyLectureDelete}
        onPress={() => navigation.navigate('LectureDetail')}>
        <View>
          <Text style={styles.MyLectureDeleteText}>View</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MyLectureWrapper: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  MyLectureData: {
    backgroundColor: '#2F3C51',
    padding: '3%',
    width: '79%',
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

export default LectureItem;
