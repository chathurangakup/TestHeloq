
import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

     container:{
        flex:1,
       
    },
    userVideo:{
        backgroundColor: 'white',
        //  position:"absolute",
       
        width: wp('27%'),
        height: hp('24%'),
        overflow:'hidden',
         zIndex:2
    },
    remoteVideo:{
        
        flex:1,
       
        
    },
    switchBtn:{
       backgroundColor:'white',
        position:"absolute",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        left: "40%",
        top: "85%",
        width: wp('17%'),
        height:hp('8%'),
      
        overflow:'hidden',
        zIndex:2
    },
    backstyles:{
        position:"absolute",
        left: "6%",
        top: "6%",
        width: "10%",
        height: "10%",
        overflow:'hidden',
        zIndex:2
    }

});