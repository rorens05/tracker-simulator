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
const {width, height} = Dimensions.get('screen');
export default function Description() {
  const userContext = useContext(UserContext)
  const {refreshUser} = userContext.data
  const navigation = useContext(NavigationContext);
  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0', width: width, height: height}}>
			<TouchableWithoutFeedback onPress={() => navigation.push('Login')}>
				<View elevation={3} style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', margin: 30, padding: 50}}>
					<Text style={{color: '#707070', fontSize: 40, fontWeight: '400'}}>This device's gadget code:</Text>
					<Text style={{color: '#29357C', fontSize: 100, fontWeight: '400', paddingTop: 20, paddingBottom: 70}}>SJAHLWS</Text>
					<Text style={{color: '#B9B9B9', fontSize: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
				</View>
			</TouchableWithoutFeedback>
    </View>
  );
}
