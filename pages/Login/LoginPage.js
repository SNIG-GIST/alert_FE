import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>로그인</Text>
      </View>
      <Text style={styles.title}>학교 이메일</Text>
      <TextInput style={styles.emailInput} placeholder="test@gm.gist.ac.kr" />
      <Text style={styles.title}>인증코드 입력</Text>
      <View style={styles.verifyWrapper}>
        <TextInput style={styles.verifyInput} />
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6E52FC', '#5597F8']}
          style={styles.linearGradient}>
          <Text style={styles.loginText}>로그인</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#1B222E',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: '3%',
    marginLeft: '6%',
  },
  headerTitle: {
    marginLeft: '36.5%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: '14%',
    marginTop: '10%',
  },
  emailInput: {
    height: 33,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 18,
    marginTop: '5%',
  },
  verifyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyInput: {
    height: 33,
    width: '54%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 18,
    marginTop: '5%',
  },
  verifyButton: {
    width: '18%',
    height: 33,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6E52FC',
    marginTop: '5%',
    marginLeft: '6%',
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '70%',
    height: '6%',
    marginTop: '100%',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '100%',
    height: '100%',
  },
  loginText: {
    fontSize: 17,
    fontWeight: '900',
    color: 'white',
  },
});

export default LoginPage;
