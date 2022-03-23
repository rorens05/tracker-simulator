import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Items from './Items';
const {width, height} = Dimensions.get('screen');

export default function DeviceProfile() {
  return (
    <View
      style={{
        width: width * 0.35,
        backgroundColor: '#FFF',
        marginRight: 30,
        padding: 6,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{color: '#29357C', fontSize: 40}}>H.S - Left Wing</Text>
        <Text style={{color: '#707070', fontSize: 15}}>SJAHLWS</Text>
      </View>
      <View style={{marginHorizontal: 30, marginBottom: 10}}>
        <Text style={{color: '#707070', fontSize: 20, marginBottom: 10}}>
          Time in
        </Text>
        <ScrollView
          style={{maxHeight: 200}}
          showsVerticalScrollIndicator={false}>
          <Items login={true} name={'Carlos Alfonso Iñigo'} time={'9:00 AM'} />
          <Items login={true} name={'Michael Ben Gabriel'} time={'6:58 AM'} />
        </ScrollView>
      </View>
      <View style={{marginHorizontal: 30, marginBottom: 50}}>
        <Text style={{color: '#FE0000', fontSize: 20, marginBottom: 10}}>
          Time out
        </Text>
        <ScrollView
          style={{maxHeight: 200}}
          showsVerticalScrollIndicator={false}>
          <Items login={false} name={'Vhon Lopez'} time={'4:00 PM'} />
          <Items login={false} name={'Laurence Bautista'} time={'5:22 PM'} />
          <Items login={false} name={'Leo Ferrer'} time={'5:02 PM'} />
        </ScrollView>
      </View>
    </View>
  );
}
