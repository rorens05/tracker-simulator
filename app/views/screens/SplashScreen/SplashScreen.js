import { NavigationContext } from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import {View, Text, Dimensions, Image} from 'react-native'
const {width, height} = Dimensions.get('screen');

export default function SplashScreen() {
  const navigation = useContext(NavigationContext)

  useEffect(() => {
    const timer = setTimeout(() => navigation.push('Login'), 2000);
    return(
      () => clearTimeout(timer)
    )
  }, [navigation])
  

  return (
    <View style = {{ flex: 1 , height:height, maxWidth:width, backgroundColor: '#fff' }}>
      <Text>This is SplashScreen</Text>
    </View>
  )
}
