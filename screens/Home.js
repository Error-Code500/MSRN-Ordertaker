import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Home = () => {
    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (err) {
            console.log('Error @clearOnboarding', err)
        }
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={clearOnboarding}>
            <Text>To Unview Onboarding</Text>
        </TouchableOpacity>
    </View>
    )
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});