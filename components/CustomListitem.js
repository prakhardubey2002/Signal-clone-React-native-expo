import React, { useState,useEffect } from "react";
import {  StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";
const CustomListitem = ({id,chatName,enterChat}) => {
  const [chatMessages,setChatMessages]=useState([]);

  useEffect(() => {
   const unsubscribe=db
   .collection('chats')
   .doc(id)
   .collection('messages')
   .orderBy('timestamp','desc')
   .onSnapshot(snapshot=>[
    setChatMessages(snapshot.docs.map(doc=>doc.data()))
   ])
   return unsubscribe;
  })
  

  return (
    <ListItem  onPress={()=>enterChat(id,chatName)} key={id} bottomDivider>
      <Avatar 
        rounded
        source={{
          uri: chatMessages?.[0]?.photoURL || "https://i.etsystatic.com/27363395/c/1242/987/0/153/il/ffef3d/2896449986/il_340x270.2896449986_13ae.jpg",
        }}
      />
    <ListItem.Content>
          <ListItem.Title style={{fontWeight:"650"}} >
                {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" >
            ABC
          </ListItem.Subtitle>
    </ListItem.Content>
    </ListItem>
  );
};

export default CustomListitem;

const styles = StyleSheet.create({});
