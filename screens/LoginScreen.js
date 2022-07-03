import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { Button,Input,Image } from 'react-native-elements';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Image  style={styles.tinyLogo} source={{
            uri:"https://images.hindustantimes.com/tech/img/2021/05/12/960x540/signal_app_1610868805441_1610868819838_1620837476101.png",
        }} />
      {/* <Text>I am LoginScreen</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius:'2rem',
      },
  });
  

export default LoginScreen