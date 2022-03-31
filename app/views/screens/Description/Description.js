import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import CodeValidationAPI from '../../../api/CodeValidationAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/Loader';
import {getModel} from 'react-native-device-info';
import {UserContext} from '../../../context/UserContext';
const {width, height} = Dimensions.get('screen');
export default function Description() {
  const navigation = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const userContext = useContext(UserContext);
  const {setUser, user} = userContext.data;

  const init = async () => {
    const code = (await AsyncStorage.getItem('code')) || '';
    console.log('code', code);
    let response = await new CodeValidationAPI().requestCode(code);
    setLoading(true);
    if (response.ok) {
      AsyncStorage.setItem('code', response.data.code);
      setCode(response.data.code);
    } else {
      alert('Something went wrong while fetching code');
    }
    setLoading(false);
  };

  const validateCode = async () => {
    const model = await getModel();
    const code = await AsyncStorage.getItem('code');
    if (code) {
      let response = await new CodeValidationAPI().validateCode(code, model);
      if (response.ok) {
        await setUser(response.data);
      }
    }
  };

  useEffect(() => {
    if (user != null) {
      navigation.replace('Login');
    }
  }, [user]);

  useEffect(() => {
    init();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F0F0F0',
      }}>
      {loading && <Loader />}

      <TouchableWithoutFeedback>
        <View
          elevation={3}
          style={{
            flex: 1,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 30,
            padding: 50,
          }}>
          <Text style={{color: '#707070', fontSize: 40, fontWeight: '400'}}>
            {"This device's gadget code:"}
          </Text>
          <Text
            style={{
              color: '#29357C',
              fontSize: 100,
              fontWeight: '400',
              paddingTop: 20,
              paddingBottom: 70,
            }}>
            {code}
          </Text>
          <TouchableOpacity style={{marginBottom: 12}} onPress={validateCode}>
            <Text style={{color: 'blue', fontSize: 18}}>Reload</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
