import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import EditButton from '../../components/EditButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {tokenValidate} from '../../modules/account';
import {GetLocalStorage} from '../../lib/LocalStorage';

const StartingPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tokenValidation = userToken => dispatch(tokenValidate(userToken));

  const {tokenError, tokenLoading} = useSelector((state, index) => ({
    tokenError: state.errorReducer['account/TOKEN_VALIDATE'],
    tokenLoading: state.loadingReducer['account/TOKEN_VALIDATE'],
  }));
  useEffect(() => {
    const fn = async () => {
      const token = await GetLocalStorage('userToken');
      tokenValidation(token);
      await console.log(tokenError);
    };
    fn();
    if (tokenError === false) {
      navigation.navigate('Schedule_BottomTab');
    }
  }, [tokenError]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>SNIG</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Login')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6E52FC', '#5597F8']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>로그인</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('SignUp')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6E52FC', '#5597F8']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>회원가입</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#1B222E',
  },
  title: {
    fontWeight: '600',
    fontSize: 60,
    color: 'white',
    letterSpacing: 5,
    marginTop: Platform.OS === 'ios' ? '55%' : '35%',
    marginBottom: '20%',
  },
  Button: {
    width: '40%',
    height: '6%',
    marginBottom: 30,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default StartingPage;
