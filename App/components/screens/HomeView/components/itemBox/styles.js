
import {Dimensions,StyleSheet} from 'react-native';
const imageWidth = Dimensions.get('window').width;
const SCREEN_WIDTH=Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'center',
        width:SCREEN_WIDTH,
        height:80
        
    },
    deletebox:{
       backgroundColor:'red',
       justifyContent:'center',
       alignItems:'center',
       width:100,
       height:80
    },
    imagecontainerstyle:{
        flex:1,
        padding:10
    }

});