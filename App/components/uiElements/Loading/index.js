import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import styles from './styles';

class Loading extends Component {
    state = {
      
    }
  static getDerivedStateFromProps(props, state) {
   
    return {
      ...state,
    }
  }

  render() {
    const animating = this.props.animating;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color={'#777'}
          size="large"
          style={styles.activityIndicator} />
      </View>
    )
  }
}
export default Loading;