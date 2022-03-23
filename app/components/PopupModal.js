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
const {width, height} = Dimensions.get('screen');

export default function PopupModal({
  status,
  fullName,
  name,
  time,
  section,
  closeModal = () => {},
}) {
  const handleClose = () => {
    closeModal();
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          color: status ? '#29357C' : '#FE0000',
          fontSize: 50,
          marginBottom: 30,
          fontWeight: '400',
        }}>
        {status ? 'Welcome back,' : 'Have a good day,'} {`${name}`}!
      </Text>
      <ImageBackground
        source={status ? blueLines : redLines}
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
          <View style={{height: 160, justifyContent: 'flex-end'}}>
            <Image
              source={status ? blueUser : redUser}
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
            marginBottom: 5,
            textAlign: 'center',
          }}>
          {fullName}
        </Text>
        <Text
          style={{
            color: status ? '#29357C' : '#FE0000',
            fontSize: 25,
            textAlign: 'center',
          }}>
          {section}
        </Text>
        <View
          style={{
            backgroundColor: status ? '#29357C' : '#FE0000',
            margin: 10,
            height: 45,
            borderRadius: 25,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFF', fontSize: 20, textAlign: 'center'}}>
            Time in: {`${time}`}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
