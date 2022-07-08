import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const CustomListitem = ({id,chatName,enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://i.etsystatic.com/27363395/c/1242/987/0/153/il/ffef3d/2896449986/il_340x270.2896449986_13ae.jpg",
        }}
      />
    <ListItem.Content>
          <ListItem.Title style={{fontWeight:"650"}} >
                Beta Tester 1
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
