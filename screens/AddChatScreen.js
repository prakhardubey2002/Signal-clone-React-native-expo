import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Button,Input } from "react-native-elements"

const AddChatScreen = ({navigation}) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Chats",
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { color: "black" },
        headerTintColor: "black",
      })
      
    }, [navigation])
  return (
    <View>
      <Text>AddChatScreen</Text>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({})