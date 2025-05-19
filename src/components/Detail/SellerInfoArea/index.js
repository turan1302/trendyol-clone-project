import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import detail_product from '../../../config/datas/detail/detail_product';
import Entypo from 'react-native-vector-icons/Entypo';
import config from '../../../config';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SellerInfoArea = () => {

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
        <View style={styles.welcome_area}>
            <View style={styles.product_seller_info_area_top}>
                <TouchableOpacity style={styles.product_seller_info_area_top_left_button}>
                    <Text style={styles.product_seller_info_area_top_left_button_text}>Seçili Satıcı: <Text
                        style={styles.product_seller_info_area_top_left_button_brand_text}>{detail_product.brandText}</Text></Text>

                    <Text style={styles.product_seller_info_area_top_left_button_brand_rate_average}>8.9</Text>

                    <Feather name={'info'} size={18} color={'#919191'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.product_seller_info_qa_button}>
                    <Text style={styles.product_seller_qa_button_text}>459 Soru & Cevap</Text>
                    <Entypo name={'chevron-small-right'} size={18} style={styles.product_seller_qa_button_arrow}
                            color={config.APP_COLOR_DARK}/>
                </TouchableOpacity>
            </View>

            {/* kargo teslim kısmı */}
            <View style={styles.product_ship_area}>
                <FontAwesome5 name={'shipping-fast'} size={18}
                              color={'#727272'}/>
                <Text style={styles.product_ship_text}>Tahmini kargoya teslim: </Text>
                <Text style={styles.product_ship_time_text}>2 gün içinde</Text>
            </View>

            {/* lokasyon kısmı */}
            <View style={styles.product_ship_location_area}>
                <View style={styles.product_ship_location_left_area(position)}>
                    <Image style={styles.product_ship_location_image(position,windowDimensions)} source={require('../../../assets/logo/suratkargo.png')}/>
                    <View style={styles.product_ship_location_info_area}>
                        <View style={styles.product_ship_location_title_area}>
                            <Text style={styles.product_ship_location_title}>Tahmini Teslimat: </Text>
                            <Feather name={'info'} color={'#9d9d9d'} size={15}/>
                        </View>
                        <Text style={styles.product_ship_location_text}>20 Mayıs Salı kapında!</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.product_location_button_area(position)}>
                    <FontAwesome5 name={'map-marker-alt'} style={styles.product_location_button_icon} color={config.APP_COLOR}/>
                    <Text style={styles.product_location_button_text} numberOfLines={1}>Konya/Karatay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SellerInfoArea;
