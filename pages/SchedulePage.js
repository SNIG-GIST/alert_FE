import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Calender from '../components/Calender';
import EditButton from '../components/EditButton';
import Memo from '../components/Memo';
import {
  StyleSheet,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const SchedulePage = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.background}>
        <View style={styles.wrapper}>
          <Calender />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#6E52FC', '#5597F8']}
            style={styles.linearGradient}>
            <EditButton />
          </LinearGradient>
          <Memo />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
});

export default SchedulePage;
