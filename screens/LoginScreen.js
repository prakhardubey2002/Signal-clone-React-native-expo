import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView,StyleSheet,View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button,Input,Image } from 'react-native-elements';
const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=()=>{

    }
  return (
    <KeyboardAvoidingView behavior='padding'  style={styles.container} >
        <StatusBar style="light" />
        <Image  style={styles.tinyLogo} source={{
            uri:"https://images.hindustantimes.com/tech/img/2021/05/12/960x540/signal_app_1610868805441_1610868819838_1620837476101.png",
        }} />
      {/* <Text>I am LoginScreen</Text> */}
      <View style={styles.inputContainers} >
        <Input placeholder='Email' autoFocus type="Email" value={email} onChangeText={(text) =>setEmail(text)}/>  
        <Input placeholder='Password' secureTextEntry type="password" 
        value={password} onChangeText={(text) =>setPassword(text)} />  
      </View>
      <Button style={styles.button} onPress={signIn} title="Login" />
      <Button onPress={()=>navigation.navigate("Register")} style={styles.button} type="outline" title="Register" />
      <View style={{height:100}}  />
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
      padding:'10px',
     
    },
    tinyLogo: {
        width: 180,
        height: 180,
      },
      button:{
        width:200,
        marginTop:10,
      },
      inputContainers:{
        width:300,
      },
  });
  

export default LoginScreen
//rnfes is used to generate bolier plate
// autofocus in input cause app  to focus that elemnt whenever app loades 
// securetextentry in password input elemt cause hiding of character of password when user is typing
// value and onchange is used with setstate to collect data onchange 
//instead of onlick onpress exist in react native
//KeyBoardavoidingview is Main view here so that when user click on input elemwent like email and password they dont overlap that's why here behavoir of padding is added with it so on clicking input it will create space of 100px in padding betwwen  
// onPress={()=>navigation.navigate("name of screen you specified in app.js")} will navigate to the specified screen  
//Statusbar is bar of phone that show time,notification,wifi battery ets at top and it can be coloured to light and dark and can also be disabled using none in style
//when collecting textual value from input tag to an form or an usestate onCahngeText is used EX: onChangeText={(text) =>setEmail(text)}