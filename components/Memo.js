import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {clearLocalStorage} from '../modules/localStorage';

const Memo = ({valueLocalStorage, GetLocalStorage, SetLocalStorage}) => {
  const MemoList = ({memo, removeMemo}) => {
    return (
      <TouchableOpacity
        style={styles.memoContent}
        onLongPress={() => removeMemo(memo.id)}>
        <Text style={styles.memoContentText}>{memo.text}</Text>
      </TouchableOpacity>
    );
  };

  const [memos, setMemos] = useState([
    {
      id: 1,
      text: '에세이 과제',
    },
    {
      id: 2,
      text: '화학 과제',
    },
  ]);
  const nextId = useRef(2);
  const [newMemo, setNewMemo] = useState('');
  const addMemo = () => {
    if (newMemo.length !== 0) {
      nextId.current += 1;
      const memo = {
        ...memos,
        id: nextId.current,
        text: newMemo,
      };
      setMemos(memos.concat(memo));
      setNewMemo('');
    }
  };
  const memoHandler = text => {
    setNewMemo(text);
  };
  const onPressEnter = () => {
    addMemo();
    SetLocalStorage('key', 'Hello jaehong');
  };
  const removeMemo = id => {
    setMemos(memos.filter(memo => memo.id !== id));
    nextId.current -= 1;
    console.log(GetLocalStorage('key'));
    console.log(valueLocalStorage);
  };

  return (
    <View style={styles.memoWrapper}>
      <Text style={styles.memoTitle}>Memo</Text>
      <View style={styles.memoBar} />
      <ScrollView style={styles.memoContentWrapper}>
        <View style={styles.memoContentReverse}>
          {memos.map((memo, index) => (
            <MemoList
              memo={memo}
              removeMemo={removeMemo}
              index={index}
              key={index}
            />
          ))}
          <View style={styles.memoAddButton}>
            <TextInput
              style={styles.memoAddButtonText}
              placeholder="+ 새로운 메모"
              placeholderTextColor="#52A0F8"
              autoCorrect={false}
              onSubmitEditing={onPressEnter}
              onChangeText={memoHandler}
              value={newMemo}
            />
          </View>
        </View>
      </ScrollView>
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
    minHeight: '30%',
    maxHeight: Platform.OS === 'ios' ? '65%' : '45%',
  },
  memoContentReverse: {
    flexDirection: 'column-reverse',
  },
  memoContent: {
    marginBottom: Platform.OS === 'ios' ? '0%' : '5%',
    marginTop: Platform.OS === 'ios' ? '5%' : '0%',
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
