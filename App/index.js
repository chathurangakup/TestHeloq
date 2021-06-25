import React from 'react';
import {
   StatusBar,
   Platform
   
  } from 'react-native';
import { View,Text} from 'react-native';



import Page1 from './components/screens/HomeView';
import Navigators from './components/navigators/Appnavigators';



export default () =>

  <View style={{flex:1}}>
     <Navigators/>
</View>

   

