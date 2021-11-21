import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginPage = ({SendMail, LogIn}) => {
  const [email, setEmail] = useState('');
  const [cert, setCert] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('StartingPage')}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>로그인</Text>
      </View>
      <Text style={styles.title}>학교 이메일</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="test@gm.gist.ac.kr"
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.title}>인증코드 입력</Text>
      <View style={styles.verifyWrapper}>
        <TextInput
          style={styles.verifyInput}
          onChangeText={text => setCert(text)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => {
            if (email.length >= 5) SendMail(email);
            else Alert.alert('이메일을 입력해주세요');
          }}>
          <Text style={styles.verifyButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (email.length >= 5 && cert.length >= 1) LogIn(email, cert);
          else Alert.alert('이메일, 인증코드를 모두 입력해주세요');
        }}>
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
    fontSize: 13,
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
    fontSize: 13,
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
    marginTop: Platform.OS === 'ios' ? '100%' : '55%',
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
