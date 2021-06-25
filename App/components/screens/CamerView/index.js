import React,{useEffect,useState} from 'react';
import { 
    Text,
    SafeAreaView,
     Dimensions,
     View,
     TouchableOpacity

        } from 'react-native';
import IconMenu from 'react-native-vector-icons/AntDesign';
import IconCamera from 'react-native-vector-icons/Ionicons'
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    mediaDevices,
    registerGlobals
  } from 'react-native-webrtc';
  import MovableView from 'react-native-movable-view';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;





import styles from './styles';


function CamerView(props){
   const [streamstate,setStream]=useState([]);
   const [isFront,setisFront]=useState(true);
    
useEffect(()=>{
//    let isFront = false;
mediaDevices.enumerateDevices().then(sourceInfos => {
  console.log(sourceInfos);
  let videoSourceId;
  for (let i = 0; i < sourceInfos.length; i++) {
    const sourceInfo = sourceInfos[i];
    if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
      videoSourceId = sourceInfo.deviceId;
    }
  }
  mediaDevices.getUserMedia({
    audio: true,
    video: {
      width: 640,
      height: 480,
      frameRate: 30,
      facingMode: (isFront ? "user" : "environment"),
      deviceId: videoSourceId
    }
  })
  .then(stream => {
    // Got stream!
     setStream(stream)
    console.log(stream)


  })
  .catch(error => {
      console.log(error)
    // Log error
  });
});
 return(()=>{
     if(streamstate.length==0){

     }else{
        streamstate.getTracks()
        .forEach((track) => track.stop());
     }
   
 })

},[isFront])
  

 const switchCam=()=>{
    if(isFront==true){
        streamstate.getTracks()
        .forEach((track) =>    track.stop());
        setisFront(false) 
    }else{
        streamstate.getTracks()
        .forEach((track) =>    track.stop());
        setisFront(true) 
    } 
 }     
    
 
  return(
       <View style={{flex:1}} >
        {streamstate.length==0?
           null
        :
            <View style={{flex:1}}>
                <View style={styles.backstyles}>
                    <IconMenu name="left" size={wp('10%')}  color={'white'}  onPress={()=>props.navigation.navigate('TabView')}/>
              </View>
           <View style={styles.remoteVideo}> 
                <RTCView objectFit='cover' style={{ flex: 1, backgroundColor: '#424242' }} streamURL={streamstate.toURL()} /> 
            </View> 
            <View style={{position:'absolute', left: "60%",top: "70%"}}>
            <MovableView>
                    <View style={styles.userVideo}> 
                        <RTCView objectFit='cover' zOrder={1} style={{ flex: 1, backgroundColor: 'red' }} streamURL={streamstate.toURL()}/> 
                    </View> 
              </MovableView>
              </View>
            <View style={styles.switchBtn}>
                    <TouchableOpacity onPress={()=>switchCam()}>
                        <IconCamera name="camera-reverse-outline" size={wp('8%')}  color={'black'}  />
                    </TouchableOpacity>
             </View>
           
            </View>
       }
        </View>
      );  
} 

export default CamerView;