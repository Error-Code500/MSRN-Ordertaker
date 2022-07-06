import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import SplashScreen from 'react-native-splash-screen';

import {
  Onboarding,
} from "./component";


export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <View style={styles.container}>
      <Onboarding />
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