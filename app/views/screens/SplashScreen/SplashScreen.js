import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContext} from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import CodeValidationAPI from '../../../api/CodeValidationAPI';
import ontraqLogo from './../../../images/ontraq-logo-high-res.png';
const {width, height} = Dimensions.get('screen');
import {getModel} from 'react-native-device-info';
import {UserContext} from '../../../context/UserContext';

export default function SplashScreen() {
  const navigation = useContext(NavigationContext);
  const userContext = useContext(UserContext);
  console.log({userContext});
  const {setUser, user} = userContext.data;
  const init = async () => {
    const model = await getModel();
    const code = await AsyncStorage.getItem('code');
    if (code) {
      let response = await new CodeValidationAPI().validateCode(code, model);
      if (response.ok) {
        await setUser(response.data);
      } else {
        if (response.status === 404) {
          alert(response.data.message);
          navigation.replace('Description');
        } else {
          alert('Something went wrong while validating the code');
        }
      }
    } else {
      navigation.replace('Description');
    }
  };

  useEffect(() => {
    setTimeout(() => init(), 2000);
  }, []);

  useEffect(() => {
    if (user != null) {
      navigation.replace('Login');
    }
  }, [user]);

  return (
    <View
      style={{
        flex: 1,
        height: height,
        maxWidth: width,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={ontraqLogo}
        resizeMode="contain"
        style={{width: 600, height: 240}}
      />
    </View>
  );
}
