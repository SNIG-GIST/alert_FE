import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MyLecture from './MyLecture';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

const BottomSheet = props => {
  const {modalVisible, setModalVisible} = props;
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (props.modalVisible) {
      resetBottomSheet.start();
    }
  }, [props.modalVisible, resetBottomSheet]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  return (
    <Modal visible={modalVisible} transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#6E52FC', '#5597F8']}
            style={styles.linearGradient}>
            <TouchableOpacity>
              <Text style={styles.editButtonText}>search</Text>
            </TouchableOpacity>
          </LinearGradient>
          <ScrollView>
            <MyLecture />
            <MyLecture />
            <MyLecture />
            <MyLecture />
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: 250,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2F3C51',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  linearGradient: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '3.5%',
    width: '28%',
    height: '13%',
    marginRight: '3.5%',
    marginBottom: '2.5%',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});

export default BottomSheet;
