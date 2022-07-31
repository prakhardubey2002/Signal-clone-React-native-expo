import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();//React native router functionality is in StackNavigation
const globalScreenOptions={//css component
  headerStyle:{backgroundColor:'#2C68ED'},
  headerTitleStyle:{color:'white'},
  headerTintColor:"white",
}
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator 
      // initialRouteName="Home"//default path
       screenOptions={globalScreenOptions} >
      
      <Stack.Screen 
      options={{ title:"Lets Sign Up"}} 
      name='Login' 
      component={LoginScreen}/>{/* Path for Login Screen */}
      
      <Stack.Screen 
      name='Register' 
      component={RegisterScreen}/>{/* Path for Register Screen */}
      
      <Stack.Screen 
      name='Home' 
      component={HomeScreen}/>{/* Path for Register Screen */}
    
      <Stack.Screen name='AddChat' component={AddChatScreen} />
      <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
