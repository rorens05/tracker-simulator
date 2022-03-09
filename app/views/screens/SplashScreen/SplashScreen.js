import { NavigationContext } from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import {View, Text, Dimensions, Image} from 'react-native'
import ontraqLogo from './../../../images/ontraq-logo.png'
const {width, height} = Dimensions.get('screen');

export default function SplashScreen() {
  const navigation = useContext(NavigationContext)

  useEffect(() => {
    const timer = setTimeout(() => navigation.push('Description'), 2000);
    return(
      () => clearTimeout(timer)
    )
  }, [navigation])
  

  return (
    <View style = {{ flex: 1 , height:height, maxWidth:width, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={ontraqLogo} resizeMode='contain' style={{width: 600, height: 240}} />
    </View>
  )
}
