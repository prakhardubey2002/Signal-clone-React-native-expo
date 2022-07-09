import React, { useLayoutEffect,useState,useEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListitem from '../components/CustomListitem';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth, db } from '../firebase';
const HomeScreen = ({ navigation }) => {
    const [chats,setChats]=useState([]);
    const signOutUser = () => {
        auth.signOut().then(() => {
            alert('Logged Out');
            navigation.replace("Login");
        });
    }
    useEffect(() => {
      const unsubcribe=db.collection('chats').onSnapshot(snapshot=>{
        setChats(
            snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
      })
      return unsubcribe;
    }, [])
    
    useLayoutEffect(() => {
        console.log(auth?.currentUser?.photoURL);
        navigation.setOptions({
            title: "Signal",
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5} >
                        <Avatar
                            rounded
                            source={{
                                uri: auth?.currentUser?.photoURL
                            }}
                        />
                    </TouchableOpacity >
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }} >
                    <TouchableOpacity activeOpacity={0.5} >
                        <AntDesign name='camerao' size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("AddChat")}
                    activeOpacity={0.5} >
                        <SimpleLineIcons name='pencil' size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation])
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id,data:{chatName}})=>(
                <CustomListitem key={id} id={id} chatName={chatName} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        height:'100%'
    }
});