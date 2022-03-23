import React from 'react';
import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';
import {DEV_API_URL} from '../../../../constants';

const {width, height} = Dimensions.get('screen');

const Items = ({item}) => {
  const color = item.attendance_status == 'time_in' ? '#29357C' : '#FE0000';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: DEV_API_URL + item.student.image_path}}
          style={{
            height: 30,
            width: 30,
            backgroundColor: color,
            borderWidth: 2,
            borderColor: color,
            borderRadius: 15,
          }}
          resizeMethod="resize"
        />
        <Text style={{color: '#707070', fontSize: 15, paddingLeft: 10}}>
          {`${item.student.user.first_name} ${item.student.user.last_name}`}
        </Text>
      </View>
      <Text
        style={{
          color: color,
          fontSize: 15,
        }}>
        {new Date(item.created_at).toLocaleTimeString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Items;
