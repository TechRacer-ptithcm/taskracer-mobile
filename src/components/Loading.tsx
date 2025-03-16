import { useEffect, useRef } from "react";
import { Animated, Easing, Image, useAnimatedValue, View } from "react-native";
import { WhiteColor } from "../assets/color";

export const Loading = () => {
    const rotation = useRef(new Animated.Value(0)).current
    const translatePositiveValue = useRef(new Animated.Value(0)).current
    const translateNegativeValue = useRef(new Animated.Value(0)).current
    const opacity = useRef(new Animated.Value(1)).current
    const rotate = rotation.interpolate({
        inputRange: [-50, 50],
        outputRange: ['-50deg', '50deg']
    })
    useEffect(()=>{
        Animated.loop(
            Animated.parallel(
                [
                    Animated.sequence([
                        Animated.timing(rotation, {
                            toValue: -30,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotation, {
                            toValue: 30,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotation, {
                            toValue: -20,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotation, {
                            toValue: 20,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotation, {
                            toValue: -10,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                        Animated.timing(rotation, {
                            toValue: 0,
                            duration: 180,
                            useNativeDriver: true,
                        }),
                    ]),
                    Animated.sequence([
                        Animated.timing(translatePositiveValue, {
                            toValue: 30,
                            easing: Easing.ease,
                            useNativeDriver: true,
                            duration: 200,
                        })
                    ]),
                    Animated.sequence([
                        Animated.timing(translateNegativeValue, {
                            toValue: -30,
                            easing: Easing.ease,
                            useNativeDriver: true,
                            duration: 200,
                        })
                    ]),
                    Animated.sequence([
                        Animated.timing(opacity, {
                            toValue: 0,
                            easing: Easing.ease,
                            useNativeDriver: true,
                            duration: 200,
                        })
                    ]),

                ]
            )
        ).start()
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', inset: 0 }}>
            <View style={{ position: 'absolute', inset: 0, backgroundColor: 'black', opacity: 0.8 }} />
            <View style ={{position: 'absolute', overflow: "visible"}}>

                <Animated.View style = {{left: 0, position: 'absolute', borderRadius: 10, transform: [{translateX: translateNegativeValue}, {translateY: translateNegativeValue}]}}>
                    <Animated.View style = {{width: 20, height: 8, backgroundColor: WhiteColor, transform: [{rotate: '45deg'}], borderRadius: 20, opacity: opacity}}/>
                </Animated.View>
                <Animated.View style = {{right: 0, position: 'absolute', borderRadius: 10, transform: [{translateX: translatePositiveValue}, {translateY: translateNegativeValue}]}}>
                    <Animated.View style = {{width: 20, height: 8, backgroundColor: WhiteColor, transform: [{rotate: '-45deg'}], borderRadius: 20, opacity: opacity}}/>
                </Animated.View>
                <Animated.View style = {{bottom: 0, position: 'absolute', borderRadius: 10, transform: [{translateX: translateNegativeValue}, {translateY: translatePositiveValue}]}}>
                    <Animated.View style = {{width: 20, height: 8, backgroundColor: WhiteColor, transform: [{rotate: '-45deg'}], borderRadius: 20, opacity: opacity}}/>
                </Animated.View>
                <Animated.View style = {{right: 0, bottom: 0, position: 'absolute', borderRadius: 10, transform: [{translateX: translatePositiveValue}, {translateY: translatePositiveValue}]}}>
                    <Animated.View style = {{width: 20, height: 8, backgroundColor: WhiteColor, transform: [{rotate: '45deg'}], borderRadius: 20, opacity: opacity}}/>
                </Animated.View>
                <Animated.View style = {{transform:[{rotate}] }}>
                    <Image source={require("../assets/images/logo.png")} style={{ width: 100, height: 100, transform: [{rotate: '0deg'}]}} />
                </Animated.View>
            </View>
        </View>
    );
};
