import React,{useLayoutEffect} from 'react';
import { SafeAreaView,TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView, Text,View  } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListitem from '../components/CustomListitem';
import { auth } from '../firebase';
const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
        // console.log(auth?.currentUser?.photoURL);
      navigation.setOptions({
        title:"Signal",
        headerTitleAlign: 'center',
        headerStyle:{backgroundColor:'#fff'},
        headerTitleStyle:{color:"black"},
        headerTintColor:"black",
        headerLeft:()=>(
            <View style={{marginLeft:20}}>
                <TouchableOpacity/>
               <Avatar
                rounded
                source={{
                    uri: auth?.currentUser?.photoURL
                }}
               />
            </View>
        )
      });
    }, [])
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