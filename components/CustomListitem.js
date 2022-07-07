import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const CustomListitem = ({id,chatName,enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
        }}
      />
    <ListItem.Content>
          <ListItem.Title style={{fontWeight:"650"}} >
                Prakhar
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" >
            Hey there!
            Hey there!
            Hey there!
            Hey there!
            Hey there!
            Hey there!
            Hey there!
            Hey there!
          </ListItem.Subtitle>
    </ListItem.Content>
    </ListItem>
  );
};

export default CustomListitem;

const styles = StyleSheet.create({});
