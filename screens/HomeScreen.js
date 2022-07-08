import React, { useLayoutEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListitem from '../components/CustomListitem';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth } from '../firebase';
const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            alert('Logged Out');
            navigation.replace("Login");
        });
    }
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
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:80,
                    marginRight:20
                 }} >
                    <TouchableOpacity activeOpacity={0.5} >
                        <AntDesign name='camerao' size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} >
                        <SimpleLineIcons  name='pencil' size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListitem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});