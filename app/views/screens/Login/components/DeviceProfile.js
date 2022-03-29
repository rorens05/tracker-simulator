import React, {useContext} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Items from './Items';
const {width} = Dimensions.get('screen');
import {UserContext} from '../../../../context/UserContext';

export default function DeviceProfile() {
  const userContext = useContext(UserContext);
  const {user} = userContext.data;

  const timeIns = user.attendances_today
    .filter(item => item.attendance_status == 'time_in')
    .reverse();
  const timeOuts = user.attendances_today
    .filter(item => item.attendance_status == 'time_out')
    .reverse();

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
      <View style={{alignItems: 'center', marginTop: 8}}>
        <Text style={{color: '#29357C', fontSize: 40}}>{user.venue.name}</Text>
        <Text style={{color: '#707070', fontSize: 15}}>{user.code}</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
          marginBottom: 10,
        }}>
        <Text style={{color: '#707070', fontSize: 20, marginBottom: 10}}>
          Time in
        </Text>
        <ScrollView
          style={{maxHeight: 200}}
          showsVerticalScrollIndicator={true}>
          {timeIns.map((item, index) => (
            <Items key={index} item={item} />
          ))}
          {timeIns.length == 0 && (
            <Text>Time in records today will appear here..</Text>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
          marginBottom: 25,
        }}>
        <Text style={{color: '#FE0000', fontSize: 20, marginBottom: 10}}>
          Time out
        </Text>
        <ScrollView
          style={{maxHeight: 200}}
          showsVerticalScrollIndicator={true}>
          {timeOuts.map((item, index) => (
            <Items key={index} item={item} />
          ))}
          {timeOuts.length == 0 && (
            <Text>Time out records today will appear here..</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
