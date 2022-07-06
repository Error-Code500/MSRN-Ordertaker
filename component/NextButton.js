import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import Ionicon from 'react-native-ionicons';
// import AntDesign from "antd";
export default NextButton = () => {
    
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2; 
    const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
        <Svg width={size} height={size}>
            <G rotation="-90" origin={center}>
                <Circle strok="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                    <Circle 
                        stroke="#F4338F"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - ( circumference * 25 ) / 100 }/>
            </G>
        </Svg>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <Image source={'file:///C:/Users/alby/Downloads/ionicons.designerpack/arrow-forward.svg'}/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#f4338f',
        borderRadius: 100,
        padding: 20,
    },
});