import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native-web'
import { Button,Input } from 'react-native-elements';
const RegisterScreen = ({navigation}) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [imageUrl,setImageUrl]=useState("");
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
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{

  },
  inputContainer:{

  },
  Button:{
    width:100,
    marginTop:10,
  }
})
// Text in react native use h1,h2,h3 as attriute because we doesnt have seperate h1,h2 tags EX:<Text h3 >text</Text>