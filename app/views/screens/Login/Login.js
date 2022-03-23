import React, {useState, useContext, useEffect} from 'react';
import {View, Dimensions, Modal} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {UserContext} from './../../../context/UserContext';
import PopupModal from '../../../components/PopupModal';
import DeviceProfile from './components/DeviceProfile';
import DashboardView from './components/DashboardView';
const {width, height} = Dimensions.get('screen');
export default function Login() {
  const userContext = useContext(UserContext);
  const {user} = userContext.data;
  const navigation = useContext(NavigationContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log({user});
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F0F0F0',
        width: width,
        height: height,
        flexDirection: 'row',
      }}>
      <DashboardView showModal={setShowModal} />
      <DeviceProfile />

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
          <PopupModal
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
