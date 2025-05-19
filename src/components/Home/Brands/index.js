import React, {useEffect, useState} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import brands from '../../../config/datas/home/brands';
import styles from './styles';

const Brands = (props) => {

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
        <View style={styles.brand_area}>
            {brands.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Image style={styles.brand_image(position)} source={{uri: item.link}} height={200}/>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Brands;
