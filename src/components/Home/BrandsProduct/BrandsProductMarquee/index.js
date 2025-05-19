import React, {useEffect, useRef, useState} from 'react';
import {Animated, useWindowDimensions, View} from 'react-native';
import styles from './styles';

const PopularProductMarquee = ({ data, baseSpeed = 20 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textWidth, setTextWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const { width: containerWidth } = useWindowDimensions();
    const [isAnimating, setIsAnimating] = useState(false);

    const animate = () => {
        if (textWidth === 0) return;

        setIsAnimating(true);
        const totalDistance = textWidth + containerWidth;
        const duration = totalDistance * baseSpeed;

        animatedValue.setValue(containerWidth);
        Animated.timing(animatedValue, {
            toValue: -textWidth,
            duration,
            useNativeDriver: true,
        }).start(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
            setIsAnimating(false);
        });
    };

    useEffect(() => {
        if (!isAnimating) {
            animate();
        }
    }, [textWidth, containerWidth, currentIndex, isAnimating]);

    return (
        <View
            style={styles.marquee_area(data,currentIndex)}
        >
            <Animated.Text
                onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
                style={styles.marquee_text(animatedValue)}
            >
                {data[currentIndex].text}
            </Animated.Text>
        </View>
    );
};

export default PopularProductMarquee;
