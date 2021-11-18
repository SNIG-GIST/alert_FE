import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LectureItem from './LectureItem';
import WriteModal from '../../components/WriteModal';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {ClearLocalStorage} from '../../lib/LocalStorage';

const LecturePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.background}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            keyboardType="default"
            placeholderTextColor="#000000"
          />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#6E52FC', '#5597F8']}
            style={styles.linearGradientOrder}>
            <TouchableOpacity onPress={() => ClearLocalStorage()}>
              <Text style={styles.editButtonText}>Order by</Text>
            </TouchableOpacity>
          </LinearGradient>
          <ScrollView style={styles.ScrollLecture}>
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
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#6E52FC', '#5597F8']}
            style={styles.linearGradientWrite}>
            <TouchableOpacity>
              <Text style={styles.editButtonText} onPress={pressButton}>
                Write
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <WriteModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
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
  linearGradientWrite: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '3.5%',
    width: '35%',
    height: '4%',
    marginBottom: '4%',
  },
  linearGradientOrder: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3.5%',
    width: '25%',
    height: '4%',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  input: {
    height: '6%',
    width: '100%',
    alignSelf: 'center',
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: 10,
    opacity: 0.85,
    marginTop: '5%',
    marginBottom: '2%',
    paddingVertical: '1%',
    paddingLeft: '5%',
  },
  ScrollLecture: {
    marginTop: '7%',
  },
});

export default LecturePage;
