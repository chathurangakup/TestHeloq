import React from 'react'
import { View,Text,Dimensions,Image,TouchableOpacity,Animated } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import styles from './styles';


const ItemBox=(props)=>{
    const leftSwap=(progress,dragX)=>{
        const scale=dragX.interpolate({
            inputRange:[0,100],
            outputRange:[0,1]
        })
        return(
            <TouchableOpacity onPress={props.handleDeete}>
               <View style={styles.deletebox}>
                   <Animated.Text style={{transform:[{scale:scale}],color:'white'}}>Delete</Animated.Text>
               </View>
            </TouchableOpacity>
        )
    }
   

    return(
        <Swipeable renderLeftActions={leftSwap}>
                  <View style={styles.container}>
                              <View style={styles.imagecontainerstyle}>
                                     <Image
                                            style={{width:50,height:50}}
                                            source={{
                                              uri: props.url,
                                            }}
                                       />
                                </View>
                                 <View style={{flex:5,padding:10}}>
                                              <Text >{props.title}</Text>
                                 </View> 
                  </View>
       </Swipeable>
    )
}

export default ItemBox;
