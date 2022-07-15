import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar} from 'react-native-elements';
import {AntDesign,FontAwesome,Ionicons} from '@expo/vector-icons';

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Avatar
            rounded
            source={{
              uri: "https://i.etsystatic.com/27363395/c/1242/987/0/153/il/ffef3d/2896449986/il_340x270.2896449986_13ae.jpg",
            }}
          />
          <Text style={{color:"white",marginLeft:10,fontWeight:"700"}} >{route.params.chatName}</Text>
        </View> 
      ),
      headerLeft: () => (
       <TouchableOpacity style={{marginLeft:10}}
       onPress={navigation.goBack}
       >
        <AntDesign name='arrowleft' size={24} color="white" />
       </TouchableOpacity>
      ),
    });
  }, [navigation])
  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({

})