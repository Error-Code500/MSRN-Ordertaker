import React, { useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from "./component/Onboarding";

import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { 
  Menu,
  Home,
  Profile,

  SignIn,
  SignUp,
  ForgotPassword,
} from "./screens";


const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default App = () => {
  
  const [ loading, setLoading] = useState(true);
  const [ viewedOnboarding, setViewedOnboarding ] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  const checkOnboarding = async () => {
    try {
        const value = await AsyncStorage.getItem('@viewedOnboarding');

        if (value !== null) {
          setViewedOnboarding(true)
        }
    } catch (err) {
        console.log('Error @checkOnboarding: ', err)
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewedOnboarding ? <Home /> : <Onboarding /> }
    </View>
  );
};


const styles  = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});