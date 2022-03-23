import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {getModel} from 'react-native-device-info';
import CodeValidationAPI from '../api/CodeValidationAPI';
export const UserContext = React.createContext();

export class UserContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    };
  }

  setUser = user => {
    this.setState({user});
  };

  refreshDevice = async () => {
    const model = await getModel();
    const code = await AsyncStorage.getItem('code');
    if (code) {
      let response = await new CodeValidationAPI().validateCode(code, model);
      if (response.ok) {
        await this.setUser(response.data);
      } else {
        if (response.status === 404) {
          alert(response.data.message);
        } else {
          alert('Something went wrong while validating the code');
        }
      }
    } else {
      navigation.replace('Description');
    }
  };

  render() {
    const {children} = this.props;
    const {user, loading} = this.state;
    return (
      <UserContext.Provider
        value={{
          data: {
            user: user,
            setUser: this.setUser,
            refreshDevice: this.refreshDevice,
          },
        }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
