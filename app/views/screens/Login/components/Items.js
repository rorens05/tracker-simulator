import React from "react";
import { StyleSheet, Dimensions, View, Image, Text } from "react-native";

const {width, height} = Dimensions.get('screen');

const Items = () => (
  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{}} style={{height:30 ,width:30, backgroundColor: '#29357C', borderRadius: 15}} />
      <Text style={{color:'#707070', fontSize: 15, paddingLeft: 10}}>Michael Ben Gabriel</Text>
    </View>
    <Text style={{color:'#707070', fontSize: 15}}>6:58 AM</Text>
  </View>
);

const styles = StyleSheet.create({
});

export default Items;