import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const PageMiddleButtons = () => {

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const {width, height} = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const dimensionsSubscription = Dimensions.addEventListener('change', handleResize);

        return () => {
            dimensionsSubscription.remove();
        };
    }, []);

    const handleResize = ({window}) => {
        setWindowDimensions(window);
    };

    return (
        <TouchableOpacity style={styles.button_area}>
            <View style={styles.button_position}>
                <Text style={styles.button_title}>Su ve Damacana</Text>
                <View style={styles.button_bottom_button_area}>
                    <Text style={styles.button_bottom_button_title}>Su siparişi ver!</Text>
                </View>
            </View>
            <Image source={require('../../../assets/trendyolgo/su.png')} style={styles.button_image(position,width,height)}/>
        </TouchableOpacity>
    );
};

export default PageMiddleButtons;
