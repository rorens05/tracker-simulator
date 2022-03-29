import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import sbuLogo from './../images/sbu-logo.png';
import ontraqLogo from './../images/ontraq-logo.png';
import blueLines from './../images/lines-blue.png';
import redLines from './../images/lines-red.png';
import blueUser from './../images/user-icon-blue.png';
import redUser from './../images/user-icon-red.png';
import {DEV_API_URL} from '../constants';
const {width, height} = Dimensions.get('screen');

export default function PopupModal({selectedStudent, closeModal}) {
  const isTimeIn =
    selectedStudent?.venue_attendance.attendance_status == 'time_in';
  const color = isTimeIn ? '#29357C' : '#FE0000';
  const statusType = isTimeIn ? 'Time in: ' : 'Time out: ';
  const imagePlaceholder = isTimeIn ? blueUser : redUser;
  const image = selectedStudent?.student.image_path
    ? {uri: DEV_API_URL + selectedStudent.student.image_path}
    : imagePlaceholder;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          color: color,
          fontSize: 50,
          fontWeight: '400',
        }}>
        {isTimeIn ? 'Welcome back,' : 'Have a good day,'} {`${selectedStudent?.student?.user?.first_name}`}!
      </Text>
      <ImageBackground
        source={statusType ? blueLines : redLines}
        style={{
          height: 350,
          width: 600,
          backgroundColor: '#FFF',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{width: 120}}>
            <Image
              source={sbuLogo}
              resizeMode="contain"
              style={{width: 70, height: 70, borderRadius: 35}}
            />
          </View>
          <View style={{marginTop: 8}}>
            <Image
              source={image}
              resizeMode="contain"
              style={{width: 110, height: 110}}
            />
          </View>
          <View style={{width: 120}}>
            <Image
              source={ontraqLogo}
              resizeMode="contain"
              style={{width: 120, height: 50}}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#707070',
            fontSize: 35,
            textAlign: 'center',
          }}>
          {`${selectedStudent?.student?.user?.first_name} ${selectedStudent?.student?.user?.last_name}`}
        </Text>
        <Text
          style={{
            color: color,
            fontSize: 25,
            textAlign: 'center',
          }}>
          {selectedStudent?.student?.student_no}
        </Text>
        <View
          style={{
            backgroundColor: color,
            margin: 10,
            marginTop: 5,
            height: 45,
            borderRadius: 25,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center'}}>
            {`${statusType} ${new Date(
              selectedStudent?.venue_attendance?.created_at,
            ).toDateString()}, ${new Date(
              selectedStudent?.venue_attendance?.created_at,
            ).toLocaleTimeString()}`}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={closeModal}
          style={{
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              margin: 0,
              width: 200,
              borderRadius: 25,
              justifyContent: 'center',
              paddingVertical: 4,
            }}>
            <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center'}}>
              CLOSE
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
