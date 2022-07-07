import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native-web'
import { Button,Input, Text } from 'react-native-elements';
const RegisterScreen = ({navigation}) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [imageUrl,setImageUrl]=useState("");

  useLayoutEffect(() => {
    navigation.setOptions({//header title 
      headerBackTitle:"Back to Login",
    });
  }, [navigation])
  const register=()=>{

  }
  return (
    <KeyboardAvoidingView behavoir="padding" style={styles.container} >

      <StatusBar style="light"/>

      <Text h3 style={{marginBottom:50,textAlign:'center' }} >
         Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
            <Input
              placeholder='Full Name' 
              autoFocus
              type='text'
              value={name}
              onChangeText={text=>setName(text)}
            />
            <Input
              placeholder='Email' 
              type='email'
              value={email}
              onChangeText={text=>setEmail(text)}
            />
            <Input
              placeholder='Password' 
              type='text'
              value={password}
              secureTextEntry//forhidden passwoed typingeffect
              onChangeText={text=>setPassword(text)}
            />
            <Input
              placeholder='Profile Image Url' 
              type='text'
              value={imageUrl}
              onChangeText={text=>setImageUrl(text)}
              onSubmitEditing={register}
            />
      </View>
      <Button  
      // type='outline' 
      raised
      title="Register" 
      onPress={register}/>
      <View style={{height:100}}/>  
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"white"
  },
  inputContainer:{
    width:300,
  },
  Button:{
    width:200,
    marginTop:10,
  }
})
// Text in react native use h1,h2,h3 as attriute because we doesnt have seperate h1,h2 tags EX:<Text h3 >text</Text> make sure to import text from react native elemt not from in react native at top import