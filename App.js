import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();//React native router functionality is in StackNavigation
const globalScreenOptions={//css component
  headerStyle:{backgroundColor:'#2C68ED'},
  headerTitleStyle:{color:'white'},
  headerTintColor:"white",
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} >
      <Stack.Screen options={{
        title:"Lets Sign Up"
      }} name='Login' component={LoginScreen}/>{/* Path for different Screen */}
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
