import React, {useState, useContext, useEffect} from 'react';
import {View, Dimensions, Modal, Text, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {UserContext} from './../../../context/UserContext';
import PopupModal from '../../../components/PopupModal';
import DeviceProfile from './components/DeviceProfile';
import DashboardView from './components/DashboardView';
import AttendanceAPI from '../../../api/AttendanceAPI';
import Loader from '../../../components/Loader';
const {width, height} = Dimensions.get('screen');
export default function Login() {
  const userContext = useContext(UserContext);
  const {user, refreshDevice} = userContext.data;
  const [showModal, setShowModal] = useState(true);

  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState('611ee71bd1ee64cfa844');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const recordAttendance = async () => {
    setLoading(true);
    let response = await new AttendanceAPI().recordAttendance(user.code, {
      qr_token: qrCode,
    });
    if (response.ok) {
      setSelectedStudent(response.data);
      setShowModal(true);
      refreshDevice();
    } else {
      alert('Something went wrong while recording attendance');
    }
    console.log({response});

    setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F0F0F0',
        width: width,
        height: height,
        flexDirection: 'row',
      }}>
      {loading && <Loader />}
      <TouchableOpacity onPress={recordAttendance}>
        <Text>Simulate</Text>
      </TouchableOpacity>
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
            flex: 1,
            backgroundColor: '#e0e0e0cc',
          }}>
          <PopupModal
            closeModal={() => setShowModal(false)}
            selectedStudent={selectedStudent}
          />
        </View>
      </Modal>
    </View>
  );
}
