import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';

export const SetLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const GetLocalStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const GetAllLocalStorage = async () => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  try {
    return await AsyncStorage.multiGet(asyncStorageKeys);
  } catch (e) {
    console.log(e);
  }
};

export const RemoveLocalStorage = key => {
  AsyncStorage.removeItem(key);
};

export const ClearLocalStorage = async () => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  try {
    if (asyncStorageKeys.length > 0) {
      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      } else {
        await AsyncStorage.multiRemove(asyncStorageKeys);
      }
      console.log('LocalStorage Clear Done');
    }
    // No Keys
  } catch (e) {
    console.log(e);
  }
};
