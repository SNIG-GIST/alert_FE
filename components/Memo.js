import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {uuidv4} from '../lib/uuid';
import {
  GetLocalStorage,
  SetLocalStorage,
  GetAllLocalStorage,
  RemoveLocalStorage,
  ClearLocalStorage,
} from '../lib/LocalStorage';

const Memo = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [local, setLocal] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchLocal = async () => {
        try {
          const all = await GetAllLocalStorage();
          if (all) setLocal(all);
          setIsFocus(false);
        } catch (e) {
          console.log(e);
        }
      };
      if (isFocus) fetchLocal();
      if (isFocus)
        return () => {
          setIsFocus(false);
        };
    }, [local]),
  );

  const MemoList = ({memo, removeMemo}) => {
    return (
      <TouchableOpacity
        style={styles.memoContent}
        onLongPress={() => removeMemo(memo[0])}>
        <Text style={styles.memoContentText}>{memo[1]}</Text>
      </TouchableOpacity>
    );
  };

  const [text, setText] = useState('');
  const addMemo = async () => {
    if (text.length !== 0) {
      setText('');
      await SetLocalStorage(uuidv4(), text);
      const all = await GetAllLocalStorage();
      setLocal(all);
    }
  };
  const removeMemo = async uuid => {
    await RemoveLocalStorage(uuid);
    const all = await GetAllLocalStorage();
    setLocal(all);
  };

  return (
    <View style={styles.memoWrapper}>
      <Text style={styles.memoTitle}>Memo</Text>
      <View style={styles.memoBar} />
      <ScrollView style={styles.memoContentWrapper}>
        <View style={styles.memoContentReverse}>
          {local.map((memo, index) => (
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
              autoCapitalize="none"
              onSubmitEditing={() => addMemo()}
              onChangeText={e => setText(e)}
              value={text}
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
