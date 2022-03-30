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
  if (selectedStudent == null) return <View />;
  const isTimeIn =
    selectedStudent?.venue_attendance.attendance_status == 'time_in';
  const color = isTimeIn ? '#29357C' : '#FE0000';
  const statusType = isTimeIn ? 'Time in: ' : 'Time out: ';
  const message = `${statusType} ${new Date(
    selectedStudent?.venue_attendance?.created_at,
  ).toDateString()}, ${new Date(
    selectedStudent?.venue_attendance?.created_at,
  ).toLocaleTimeString()}`;
  const imagePlaceholder = isTimeIn ? blueUser : redUser;
  const image = selectedStudent?.student.image_path
    ? {uri: DEV_API_URL + selectedStudent.student.image_path}
    : imagePlaceholder;
  return (
    <View
      style={{
        zIndex: 999,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <ImageBackground
        source={isTimeIn ? blueLines : redLines}
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
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
          <View style={{marginTop: 24}}>
            <Image
              source={image}
              resizeMode="contain"
              style={{width: 150, height: 150}}
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
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            paddingBottom: 40,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: color,
              fontWeight: '400',
            }}>
            {isTimeIn ? 'Welcome back' : 'Have a good day'}{' '}
          </Text>
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
              {message}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
