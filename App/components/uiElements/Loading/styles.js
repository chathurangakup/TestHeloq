import { Dimensions, StatusBar,StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    zIndex: 9999999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  activityIndicator: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  }
});