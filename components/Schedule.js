import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Calender from './Calender';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Schedule = () => {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.wrapper}>
        <Image
          source={require('../screenshot.png')}
          style={styles.screenshotImage}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6E52FC', '#5597F8']}
          style={styles.linearGradient}>
          <TouchableOpacity>
            <Text style={styles.editButtonText}>edit</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.memoWrapper}>
          <Text style={styles.memoTitle}>Memo</Text>
          <View style={styles.memoBar} />
          <View style={styles.memoContentWrapper}>
            <View style={styles.memoContent}>
              <Text style={styles.memoContentText}>20시까지 에세이 과제</Text>
            </View>
            <View style={styles.memoContent}>
              <Text style={styles.memoContentText}>20시까지 에세이 과제</Text>
            </View>
            <TouchableOpacity style={styles.memoAddButton}>
              <Text style={styles.memoAddButtonText}>+ 새로운 메모</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1B222E',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    alignItems: 'center',
    width: '82.7%',
    height: '100%',
  },
  linearGradient: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '3.5%',
    width: '35%',
    height: '4%',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  memoWrapper: {
    marginTop: '10%',
    width: '100%',
  },
  memoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  memoBar: {
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    marginTop: '3%',
    width: '100%',
    height: 1,
  },
  memoContentWrapper: {
    marginLeft: '4%',
  },
  memoContent: {
    marginTop: '5%',
  },
  memoContentText: {
    color: '#FFFFFF',
    fontSize: 17,
    //fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  memoAddButton: {
    marginTop: '5%',
    width: '50%',
  },
  memoAddButtonText: {
    color: '#52A0F8',
    fontSize: 17,
    //fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontStyle: 'normal',
  },
});

export default Schedule;
