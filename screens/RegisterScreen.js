import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native-web'

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavoir="padding" style={styles.container} >
      <StatusBar style="light"/>
      <Text h3 style={{marginBottom:50}} >
       Create a Signal account
      </Text>
      <View style={styles.inputContainer}>

      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{

  },
})
// Text in react native use h1,h2,h3 as attriute because we doesnt have se[perste h1,h2 tags EX:<Text h3 >text</Text>