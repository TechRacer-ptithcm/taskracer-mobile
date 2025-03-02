import { Animated, useAnimatedValue, View } from 'react-native'
import { BubbleColor, WhiteColor } from '../assets/color'
import { useEffect } from 'react';


export const OverlayBubbleAnimation = () => {
    const translateXBubble1:Animated.Value = useAnimatedValue(0);
    const translateYBubble1:Animated.Value = useAnimatedValue(0);
    const translateXBubble2:Animated.Value = useAnimatedValue(0);
    const translateYBubble2:Animated.Value = useAnimatedValue(0);
    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(translateXBubble2, {
                        toValue: 100,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateXBubble2, {
                        toValue: 0,
                        duration: 9000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(translateYBubble2, {
                        toValue: 50,
                        duration: 3000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYBubble2, {
                        toValue: 100,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYBubble2, {
                        toValue: 0,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        ).start();
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(translateXBubble1, {
                        toValue: -100,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateXBubble1, {
                        toValue: 0,
                        duration: 9000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.timing(translateYBubble1, {
                        toValue: 50,
                        duration: 3000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYBubble1, {
                        toValue: -100,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYBubble1, {
                        toValue: 0,
                        duration: 6000,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        ).start();
    }, [translateXBubble1, translateYBubble1, translateXBubble2, translateYBubble2]);
    return (
        <View style = {{flex: 1, backgroundColor: WhiteColor, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden'}}>
            <Animated.View style = {
                {
                    width: 500,
                    height: 500,
                    backgroundColor: BubbleColor,
                    borderRadius: 500,
                    position: 'absolute',
                    top: -250,
                    right: -250,
                    transform: [{translateY: translateYBubble1}, {translateX: translateXBubble1}],
                }
            } />
            <Animated.View style = {
                {
                    width: 200,
                    height: 200,
                    backgroundColor: BubbleColor,
                    borderRadius: 200,
                    position: 'absolute',
                    bottom: 200,
                    transform: [{translateY: translateYBubble2}, {translateX: translateXBubble2}],

                }} />
            <Animated.View style = {
                {
                    width: 100,
                    height: 100,
                    backgroundColor: BubbleColor,
                    borderRadius: 100,
                    position: 'absolute',
                    bottom: 500,
                    transform: [{translateX: translateXBubble2}],

                }} />
        </View>
    );
};
