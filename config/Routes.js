import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../app/views/screens/SplashScreen/SplashScreen';
import Login from '../app/views/screens/Login/Login';
import Description from '../app/views/screens/Description/Description';


export default function Routes() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            title: 'Description',
            headerShown: false,
            gestureEnabled: false,
          }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
