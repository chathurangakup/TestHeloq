import React,{useState,useEffect} from 'react';
import {View,Text,SafeAreaView,FlatList,Image,Animated,TouchableOpacity} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import styles from './styles';
import Loading from '../../uiElements/Loading';
import { insertNewTodoList,deleteTodoList,queryAllTodoList} from '../../databases/allSchemas'
import relam from '../../databases/allSchemas'
import ItemBox from './components/itemBox'



function Page1(props){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

reloadData=()=>{
        queryAllTodoList().then((todoList)=>{
          if(todoList.length==0){
              alert('Relam db is empty.Please connect to Internet ')
              setData(todoList)
          }else{
             setData(todoList)
          }
            
          console.log(todoList[0].url)
          console.log("todoList")
        }).catch((e)=>{

        })
        setLoading(false)
}

insertData=(obj)=>{
      const newItem={
        id:obj.id,
        title:obj.title,
        url:obj.url,
        thumbnailUrl:obj.thumbnailUrl
      }

      insertNewTodoList(newItem).then().catch((error)=>{
         console.log(error)
      })

      reloadData()
   
}




 deleteItem=(id)=>{
    deleteTodoList(id)
    reloadData()
 }




    useEffect(()=>{
         NetInfo.fetch().then(state => {
          console.log("Connection type", state.type);
          console.log("Is connected?", state.isConnected);
          if(state.isConnected==true){
                fetch('https://jsonplaceholder.typicode.com/photos')
                .then((response) => response.json())
                .then((json) =>{
                  for (let i=0;i<10;i++) {
                         insertData(json[i])
                          console.log(json[i])
                   }
                 }  
                )
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));

               
          }else{
             alert('No internet')
             setLoading(false)
             reloadData()
          }

        });
         
       



    },[])






    return(
     <SafeAreaView style={styles.container}>
          {isLoading?  <Loading navigation={props.navigation} animating={true} />:null}
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <ItemBox 
                           url={item.url}
                           title={item.title}
                           handleDeete={()=>deleteItem(item.id)}

                        />
                    )}
                    ItemSeparatorComponent={()=>{
                      return <View style={styles.separator}></View>
                    }}
                    />
     
     </SafeAreaView>
    )

}

export default Page1


