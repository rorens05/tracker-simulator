import React, {useState, useContext, useEffect, useRef} from 'react';
import {View, Dimensions, Modal, Text, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {UserContext} from './../../../context/UserContext';
import PopupModal from '../../../components/PopupModal';
import DeviceProfile from './components/DeviceProfile';
import DashboardView from './components/DashboardView';
import AttendanceAPI from '../../../api/AttendanceAPI';
import Loader from '../../../components/Loader';
import {getDifferenceInSecondsBetweenTwoDates} from '../../../lib/dateUtils';

const {width, height} = Dimensions.get('screen');
export default function Login() {
  const userContext = useContext(UserContext);
  const {user, refreshDevice} = userContext.data;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState('611ee71bd1ee64cfa844');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const lastStudent = useRef(null);
  const lastQrToken = useRef(null);
  const lastTime = useRef(new Date());

  const isStudentDuplicated = qr_token => {
    if (
      qr_token == lastQrToken.current &&
      getDifferenceInSecondsBetweenTwoDates(lastTime.current, new Date()) < 10
    ) {
      setLoading(false);
      return true;
    }
  };

  const recordAttendance = async qr_token => {
    setLoading(true);
    if (isStudentDuplicated(qr_token)) return;
    let response = await new AttendanceAPI().recordAttendance(user.code, {
      qr_token,
    });
    if (response.ok) {
      refreshDevice();
      setSelectedStudent(response.data);
      lastStudent.current = response.data;
      lastTime.current = new Date();
      lastQrToken.current = qr_token;
      closeStudentView(response.data);
      setShowModal(true);
    } else {
      alert('Something went wrong while recording attendance');
    }
    setLoading(false);
  };

  const closeStudentView = student => {
    setTimeout(() => {
      console.log({student, lastStudent});
      if (student?.student?.id == lastStudent.current.student?.id) {
        setSelectedStudent(null);
      }
    }, 5000);
  };

  const onQRScanned = async (e, setShowCamera) => {
    await recordAttendance(e.data);
    setShowCamera(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
      }}>
      {loading && <Loader />}
      <DashboardView
        onQRScanned={onQRScanned}
        selectedStudent={selectedStudent}
      />
      <DeviceProfile />
    </View>
  );
}
