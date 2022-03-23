import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sbuLogo from './../../../../images/sbu-logo.png';
import cameraIcon from './../../../../images/camera.png';
import group from './../../../../images/group.png';
import {UserContext} from '../../../../context/UserContext';
import {DEV_API_URL} from '../../../../constants';

export default function DashboardView({showModal}) {
  const [showCamera, setShowCamera] = useState(false);
  const [tick, setTick] = useState(1);

  const userContext = useContext(UserContext);
  const {user} = userContext.data;

  useEffect(() => {
    if (showCamera) {
      setTimeout(() => {
        setShowCamera(false);
      }, 10000);
    }
  }, [showCamera]);

  useEffect(() => {
    setTimeout(() => {
      setTick(prev => prev + 1);
    }, 1000);
  }, [tick]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        margin: 30,
        padding: 6,
        borderRadius: 10,
      }}>
      <View style={{flex: 1, backgroundColor: '#FFF', borderRadius: 10}}>
        <View
          style={{
            zIndex: 10,
            flex: 1,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: 100,
          }}>
          <Text
            style={{
              flex: 1,
              textAlign: 'left',
              color: '#707070',
              fontSize: 25,
            }}>
            {tick > 0 && new Date().toDateString().slice(4)}
          </Text>
          <View
            style={{
              width: 100,
              height: 100,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'white',
                borderRadius: 100,
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {user?.venue?.school?.logo_path ? (
                <Image
                  source={{uri: DEV_API_URL + user?.venue?.school?.logo_path}}
                  style={{
                    width: '90%',
                    height: '90%',
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={sbuLogo}
                  style={{
                    width: '90%',
                    height: '90%',
                  }}
                  resizeMode="contain"
                />
              )}
            </View>
          </View>
          <Text
            style={{
              flex: 1,
              textAlign: 'right',
              color: '#707070',
              fontSize: 25,
            }}>
            {tick > 0 && new Date().toLocaleTimeString()}
          </Text>
        </View>

        <LinearGradient
          colors={['#f0f0f0', '#e7e8ea', '#5d6598']}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#000000ae',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          {!showCamera ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setShowCamera(true)}>
              <View
                style={{
                  width: '100%',
                  height: 150,
                  backgroundColor: 'transparent',
                }}>
                <Image
                  source={cameraIcon}
                  resizeMode="contain"
                  style={{height: 80, width: 120, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#FFFFFF',
                    paddingTop: 10,
                    flex: 1,
                  }}>
                  Tap here to open {`\n`} Camera
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                backgroundColor: 'transparent',
                width: '100%',
                height: '100%',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <ImageBackground
                source={group}
                resizeMode="stretch"
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flex: 1,
                  paddingBottom: 40,
                }}>
                {/* <Text style={{textAlign: 'center', fontSize: 30, color: '#FFFFFF', paddingTop: 10}}>SCAN THE ID</Text> 
                  <Text style={{textAlign: 'center', fontSize: 25, color: '#FFFFFF', paddingTop: 10}}>Bring the ID closer to the camera to scan</Text> */}
              </ImageBackground>
            </View>
          )}
        </LinearGradient>
      </View>
    </View>
  );
}
