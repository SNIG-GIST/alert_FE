import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard, TextInput} from 'react-native';

const Memo = () => {
  const [keyboard, setKeyboard] = useState(false);
  const onPressEnter = e => {
    if (e.nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
      setKeyboard(false);
    }
  };
  const onFocusTextField = () => {
    setKeyboard(true);
  };

  const MemoInput = () => {
    return (
      <View style={styles.memoAddButton}>
        <TextInput
          style={styles.memoAddButtonText}
          placeholder="+ 새로운 메모"
          placeholderTextColor="#52A0F8"
          autoCorrect={true}
          onFocus={onFocusTextField}
          onKeyPress={onPressEnter}
        />
      </View>
    );
  };

  const [memo, setMemo] = useState([
    '20시까지 에세이 과제',
    '15시까지 화학 과제',
  ]);

  const MemoList = ({memo, index}) => {
    return (
      <View style={styles.memoContent}>
        <Text style={styles.memoContentText}>{memo[index]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.memoWrapper}>
      <Text style={styles.memoTitle}>Memo</Text>
      <View style={styles.memoBar} />
      <View style={styles.memoContentWrapper}>
        {memo.map((list, index) => (
          <MemoList memo={memo} index={index} key={index} />
        ))}
        <MemoInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  memoWrapper: {
    marginTop: '3%',
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

export default Memo;
