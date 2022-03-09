import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  ImageBackground
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
// import Auth from './../../../api/Auth'
import {UserContext} from './../../../context/UserContext'
import Loader from '../../../components/Loader';
import PopUpModal from '../../../components/Modal';
import Items from './components/Items';
import sbuLogo from './../../../images/sbu-logo.png'
import cameraIcon from './../../../images/camera.png'
import group from './../../../images/group.png'
import LinearGradient from 'react-native-linear-gradient';
// import AsyncStorage from '@react-native-community/async-storage';
const {width, height} = Dimensions.get('screen');
export default function Login() {
  const userContext = useContext(UserContext)
  const {refreshUser} = userContext.data
  const navigation = useContext(NavigationContext);
  const [showModal, setShowModal] = useState(true)
  const [showCamera, setShowCamera] = useState(true)

  const handleModal = () => {
    setShowModal(true);
  }

  // const HandleLogin = async () => {
  //   setLoader(true)
  //   let response = await new Auth().login({
  //   username,
  //   password,
  //   });
  //   console.log({response})
  //   if(response.ok){
  //   setLoader(false)
  //   await AsyncStorage.setItem('token', response.data.passToken)
  //   await refreshUser();
  //   await navigation.push('Dashboard')
  //   }else{
  //   setLoader(false)
  //   alert(response?.data?.errorMessage)
  //   }
  // };
  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0', width: width, height: height, flexDirection: 'row'}}>
				<View style={{flex: 1,backgroundColor: '#FFF', margin: 30, padding: 6, borderRadius: 10}}>
          <View style={{flex: 1,backgroundColor: '#FFF', borderRadius: 10}}>
            <View style={{flex: 1, zIndex: 2, backgroundColor: '#FFF',flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, alignItems: 'center', maxHeight: 120}}>
              <Text style={{color: '#29357C', fontSize: 40}}>FEB 14</Text>
              <View style={{left: '50%', position: 'absolute', width: 100}}>
                <View style={{height: 170, width: 170, borderRadius: 85, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>
                  <Image source={sbuLogo} resizeMode='contain' style={{height: 140, width: 140, borderRadius: 70, alignSelf: 'center' }} />
                </View>
              </View>
              <Text style={{color: '#29357C', fontSize: 40}}>11:23 AM</Text>
            </View>
            <LinearGradient colors={['#f0f0f0', '#e7e8ea', '#5d6598']} style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#000000ae', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            {showCamera ? 
              <View style={{ width: '100%', height: 150, backgroundColor: 'transparent'}}>
                <Image source={cameraIcon} resizeMode='contain' style={{height: 80, width: 120, alignSelf: 'center' }} />
                <Text style={{textAlign: 'center', fontSize: 20, color: '#FFFFFF', paddingTop: 10, flex: 1}}>Tap here to open {`\n`} Camera</Text>
              </View>
              :
              <View style={{backgroundColor: 'transparent', width: '100%', height: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <ImageBackground source={group} resizeMode='stretch' style={{alignItems: 'center', justifyContent: 'flex-end', flex: 1, paddingBottom: 40}}>
                  <Text style={{textAlign: 'center', fontSize: 30, color: '#FFFFFF', paddingTop: 10}}>SCAN THE ID</Text> 
                  <Text style={{textAlign: 'center', fontSize: 25, color: '#FFFFFF', paddingTop: 10}}>Bring the ID closer to the camera to scan</Text>
                </ImageBackground>
              </View>
              }
              </LinearGradient> 
          </View>
        </View>
        <View style={{width: width*.35, backgroundColor: '#FFF', marginRight: 30, padding: 6, marginTop: 30, marginBottom: 30, borderRadius: 10, justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={{color: '#29357C', fontSize: 40 }}>H.S - Left Wing</Text>
            <Text style={{color: '#707070', fontSize: 15}}>SJAHLWS</Text>
          </View>
          <View style={{marginHorizontal: 30, marginBottom: 10}}>
            <Text style={{color: '#707070', fontSize: 20, marginBottom: 10 }}>Time in</Text>
            <ScrollView style={{maxHeight: 200}} showsVerticalScrollIndicator={false}>
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </ScrollView>
          </View>
          <View style={{marginHorizontal: 30, marginBottom: 50}}>
            <Text style={{color: '#707070', fontSize: 20, marginBottom: 10 }}>Time out</Text>
            <ScrollView style={{maxHeight: 200}} showsVerticalScrollIndicator={false}>
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </ScrollView>
          </View>
				</View>
      <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onBackdropPress={() => setShowModal(false)}
          onRequestClose={() => setShowModal(false)}>
          <View
            style={{
              width,
              height: height,
              backgroundColor: '#e0e0e0ae',
            }}>
            <PopUpModal
              closeModal={() => setShowModal(false)}
              status={true}
              fullName={'Carlos Alfonso Iñigo'}
              name={'Carlos'}
              section={'Grade 1 - Faith'}
              time={'February 22, 2022 - 07:30 AM'}
            />
          </View>
      </Modal>
    </View>
  );
}
