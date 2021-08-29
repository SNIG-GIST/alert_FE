import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    // alignItems: 'center',
    position: 'absolute',
    paddingVertical: 4,
    paddingHorizontal: 3,
    borderRadius: 2,
    borderColor: 'transparent',
    flex: 1,
  },
  title: {
    color: '#322425',
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 13,
  },
  description: {
    color: '#777',
    textAlign: 'left',
    fontSize: 9,
  },
  location: {
    color: '#555',
    textAlign: 'left',
    paddingTop: 4,
    paddingBottom: 2,
    fontSize: 11,
  },
});

export default styles;
