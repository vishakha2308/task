import React,{useEffect,useState} from 'react';
import { View,Text } from 'react-native';
import {data} from './api'

const Main =() =>{
    const [response,setResponse] = useState({})
    useEffect(()=>{
        whetherData();
    },[])
    const whetherData= async()=>{
      const res = await data();
      console.log('resp',res);
      setResponse(res.data);
    }
    return(
    <View style ={{padding:20}}>
        <Text>Weather</Text>
       {
        response ?
        <View>
            <Text>{response.name}</Text>
            <Text>Humidity -{response.main.humidity}</Text>
            <Text>Temperature -{response.main.temp}</Text>
            <Text>Visibility -{response.visibility}</Text>
       </View>
       :null}
     
    </View>
    )
}
export default Main;