import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const PageTopButtons = () => {

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
        <View style={styles.buttons_area}>
            <TouchableOpacity style={styles.left_button(position)}>
                <Text style={styles.left_button_title}>trendyol</Text>
                <Text style={styles.left_button_subtitle}>hızlı market</Text>
                <Image source={require('../../../assets/trendyolgo/hizlimarket.webp')} style={styles.left_button_image(position,width,height)}/>
                <View style={styles.left_button_bottom_button_area}>
                    <Text style={styles.left_button_bottom_button_text}>Market siparişini ver!</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.right_button(position)}>
                <Text style={styles.right_button_title}>trendyol</Text>
                <Text style={styles.right_button_subtitle}>yemek</Text>
                <Image source={require('../../../assets/trendyolgo/yemek.png')} style={styles.right_button_image(position,width,height)}/>
                <View style={styles.right_button_bottom_button_area}>
                    <Text style={styles.right_button_bottom_button_text}>Yemek siparişi ver!</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PageTopButtons;
