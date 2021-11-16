import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Star from 'react-native-star-view';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const LectureDetail = () => {
  const navigation = useNavigation();
  const lectureTitle = '기술 벤쳐 창업론';
  const lectureProfessor = '진규호';
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.headerTitle}> {lectureTitle} /</Text>
          <Text style={styles.headerProfessor}> {lectureProfessor}</Text>
        </View>
      </View>
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
  textWrapper: {
    position: 'absolute',
    top: 2,
    left: '17%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headerProfessor: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '2%',
  },
  backButton: {
    position: 'absolute',
    top: 5.5,
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});

export default LectureDetail;
