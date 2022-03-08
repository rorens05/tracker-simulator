import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
// import Auth from './../../../api/Auth'
import {UserContext} from './../../../context/UserContext'
import Loader from '../../../components/Loader';
// import AsyncStorage from '@react-native-community/async-storage';
const {width} = Dimensions.get('screen');
export default function Login() {
  const userContext = useContext(UserContext)
  const {refreshUser} = userContext.data
  const navigation = useContext(NavigationContext);

  // const HandleLogin = async () => {
  //   setLoader(true)
  //   let response = await new Auth().login({
  //   username,
  //   password,
  //   });
  //   console.log({response})
  //   if(response.ok){
  //   setLoader(false)
  //   await AsyncStorage.setItem('token', response.data.passToken)
  //   await refreshUser();
  //   await navigation.push('Dashboard')
  //   }else{
  //   setLoader(false)
  //   alert(response?.data?.errorMessage)
  //   }
  // };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>This is Login</Text>
    </View>
  );
}
