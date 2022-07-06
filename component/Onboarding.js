import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Animated
} from "react-native";

// Created Files
import slides from "../slides";
import Onboardingitem from '../component/Onboardingitem';
import Paginator from '../component/Paginator';
import NextButton from '../component/NextButton';

export default Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={style.container}>
            <View style={{ flex: 3 }}>
                <FlatList data={slides} renderItem={({ item }) => <Onboardingitem item={item} />} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slideRef}
                /> 
            </View>
            <Paginator data={slides} scrollX={scrollX} />
            <NextButton />
        </View>
        );
    };


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});