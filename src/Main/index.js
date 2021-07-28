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
            {response.name?<Text>{response.name}</Text>:null}
            {response.main&&response.main.humidity?<Text>Humidity -{response.main.humidity}</Text>:null}
            {response.main&&response.main.temp?<Text>Temperature -{response.main.temp}</Text>:null}
            {response.visibility?<Text>Visibility -{response.visibility}</Text>:null}
       </View>
       :null}
     
    </View>
    )
}
export default Main;
