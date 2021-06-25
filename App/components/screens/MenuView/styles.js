

import {Dimensions,StyleSheet} from 'react-native';
const imageWidth = Dimensions.get('window').width;

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

     container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btnContainer:{
        backgroundColor:'#777',
        padding:wp('5%'),
        borderRadius:5
       
    }

    

});