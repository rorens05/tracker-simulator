import React, {useEffect, useState, useContext, useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import sbuLogo from './../../../../images/sbu-logo.png';
import cameraIcon from './../../../../images/camera.png';
import group from './../../../../images/group.png';
import {UserContext} from '../../../../context/UserContext';
import {DEV_API_URL} from '../../../../constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import PopupModal from '../../../../components/PopupModal';

export default function DashboardView({selectedStudent, onQRScanned}) {
  const [showCamera, setShowCamera] = useState(false);
  const [tick, setTick] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const userContext = useContext(UserContext);
  const {user} = userContext.data;

  const scanCount = useRef(0);

  const handleScan = e => {
    scanCount.current = scanCount.current + 1;
    const tempCount = scanCount.current;
    setShowCamera(false);
    setTimeout(() => {
      if (scanCount.current === tempCount) {
        setShowCamera(false);
      }
    }, 15000);
    onQRScanned(e, setShowCamera);
  };

  useEffect(() => {
    setTimeout(() => {
      setTick(prev => prev + 1);
      setCurrentDate(new Date());
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
            {currentDate.toDateString().slice(4)}
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
            {currentDate.toLocaleTimeString()}
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
            position: 'relative',
          }}>
          <PopupModal
            // closeModal={() => setShowModal(false)}
            selectedStudent={selectedStudent}
          />
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
              <QRCodeScanner
                cameraStyle={{width: '100%', height: '100%'}}
                containerStyle={{
                  overflow: 'hidden',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: 100,
                }}
                cameraType="front"
                onRead={handleScan}
                flashMode={RNCamera.Constants.FlashMode.torch}
              />
            </View>
          )}
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
