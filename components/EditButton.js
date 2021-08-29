import React, {useState} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import BottomSheet from './BottomSheet';

const EditButton = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.editButtonText} onPress={pressButton}>
          edit
        </Text>
      </TouchableOpacity>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    //fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});

export default EditButton;
