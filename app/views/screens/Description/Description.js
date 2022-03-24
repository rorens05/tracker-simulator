import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import CodeValidationAPI from '../../../api/CodeValidationAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/Loader';
const {width, height} = Dimensions.get('screen');
export default function Description() {
  const navigation = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');

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
          <Text style={{color: '#B9B9B9', fontSize: 20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
