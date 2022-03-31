import React from 'react';
import {SafeAreaView} from 'react-native';
import UserContextProvider from './app/context/UserContext';
import Routes from './config/Routes';

const App = () => {
  return (
    <UserContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </UserContextProvider>
  );
};

export default App;
