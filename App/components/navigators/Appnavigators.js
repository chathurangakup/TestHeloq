import React from 'react'
import {
  
    Image,
    Text,
    View,
    Platform
   
   
  } from 'react-native';
import {createAppContainer,createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconMenu from 'react-native-vector-icons/Feather';
// import IconHeart from 'react-native-vector-icons/AntDesign';


import HomeMainView from '../screens/HomeView';
import MenuMainView from '../screens/MenuView';
import CamerView from '../screens/CamerView';




import {themeColor} from '../constants'

const CamerViewNavigator = createStackNavigator({
  CamerView: {
     screen: CamerView,
     navigationOptions:{
         header:()=> null,
     },  
 }, 
}
);

const HomeView = createStackNavigator({
  HomeMainView:{
      screen:HomeMainView,
      navigationOptions:{
        header:null,
      }
    },
});

const MenuView = createStackNavigator({
   
  MenuMainView:{
      screen:MenuMainView,
      navigationOptions:{
        header: null,
      }
    },
}
  
  );

    //hole screen navigations








const TabView = createBottomTabNavigator({
    HomeView: {
      screen: HomeView,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => <IconMenu name="home" size={wp('10%')}  color={tintColor} />
      }
    
    },
    MenuView: {
      screen: MenuView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconMenu name="menu" size={wp('10%')}  color={tintColor} />
      
      }
    },
  },{

   
    
      order: ['HomeView','MenuView'],
      
      tabBarOptions: {
        showIcon: true,
        activeTintColor:themeColor,
        inactiveTintColor: '#818181',
       // showLabel:false,
        style: {
          backgroundColor: '#fff',
          height: wp('16%'),
          paddingTop:wp('1%')
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        labelStyle: {
      
    
          fontSize:wp('3%'),
          justifyContent:'center',
          alignSelf:'center'
        },
       
        safeAreaInset:{
            bottom:'always',
            
        },
    
        tabBarPosition: 'bottom',
        lazyLoad: true,
        shifting: true,
        borderTopColor: "#fff",
      },
      
    }
  );
  



 const createRootNavigator =createSwitchNavigator(
        {
          CamerViewNavigator:{
            screen: CamerViewNavigator
          },
        
         TabView: {
            screen: TabView
          },
        },
        {
            initialRouteName:  "TabView" ,
        
           
          }
      );



const App = createAppContainer(createRootNavigator);

export default App;

