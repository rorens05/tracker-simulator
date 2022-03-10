import React from "react";
import { StyleSheet, Dimensions, View, Image, Text } from "react-native";

const {width, height} = Dimensions.get('screen');

const Items = ({login, name, time}) => (
  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5 }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{}} style={{height:30 ,width:30, backgroundColor: login ? '#29357C' : '#FE0000', borderRadius: 15}} />
      <Text style={{color:'#707070', fontSize: 15, paddingLeft: 10}}>{name}</Text>
    </View>
    <Text style={{color: login ? '#29357C' : '#FE0000', fontSize: 15}}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
});

export default Items;