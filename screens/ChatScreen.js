import React, { useLayoutEffect } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, TextInput } from 'react-native-web';
const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Avatar
            rounded
            source={{
              uri: "https://i.etsystatic.com/27363395/c/1242/987/0/153/il/ffef3d/2896449986/il_340x270.2896449986_13ae.jpg",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }} >{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name='arrowleft' size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20,
        }} >
          <TouchableOpacity>
            <FontAwesome name='video-camera' size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color="white" />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation])
  return (
    <SafeAreaView>
    <StatusBar style='light' >
      <KeyboardAvoidingView
        behavior={Platform === 'ios' ? "padding" : "height"}
        style={styles.container}
        keyboardVertivalOffset={90}
      >
        <>
          <ScrollView>

          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Signal Message"
              style={styles.textInput} />
            <TouchableOpacity onPress={sendMessage} activeOpacity={0.5} >
              <Ionicons name='send' size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>

      </KeyboardAvoidingView>
    </StatusBar>
  </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({

})