
import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

     container:{
        flex:1,
       
    },
    separator:{
      height:1,
      backgroundColor:'black'
    },


     stretch: {
         height:hp('10%'),
         width: wp('10%'),
        
     },
    containerpadding:{
        padding:10,
        flex:1
    }

});