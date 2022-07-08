import React,{useLayoutEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Button,Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase'
const AddChatScreen = ({navigation}) => {
    const [input,setinput]=useState("");
    useLayoutEffect(() => {
      navigation.setOptions({
        title:"Add a new chat",
        headerBack:"Chats",
      });
    }, [navigation]);

    const createChat= async ()=>{
        await db.collection('chats').add({
            chatName:input
        })
        .then(()=>{
            navigation.goBack();
        })
        .catch((error)=>alert(error));
    }
  return (
    <View>
        <Input 
        placeholder='Enter a chat name' 
        value={input} 
        onChangeText={(text)=>setinput(text)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon name='wechat' type='antdesign' size={24} color="black"/>
        }
        />
        <Button onPress={createChat} title='Create new Chat' />
        
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:30,
        height:'100%',
    }
})