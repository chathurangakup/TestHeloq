import React,{useState,useEffect} from 'react';
import {View,Text,SafeAreaView,FlatList,Image, TouchableOpacity} from 'react-native';

import styles from './styles';


function MenuMainView(props){
    return(
     <SafeAreaView style={styles.container}>
        
         
                <TouchableOpacity onPress={()=>props.navigation.navigate('CamerView')}>
                   <View style={styles.btnContainer}>
                    <Text style={{color:'white'}}>Open Camera</Text>
                    </View>    
                </TouchableOpacity>
         
     
     </SafeAreaView>
    )

}

export default MenuMainView


