import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Stars from 'react-native-stars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import detail_product from '../../../config/datas/detail/detail_product';
import config from '../../../config';
import Entypo from 'react-native-vector-icons/Entypo';

const RateArea = () => {
    return (
        <>
            <TouchableOpacity style={styles.product_eveulation_area}>
                <Text style={styles.product_eveulation_average_text}>{detail_product.star_average.toFixed(1)}</Text>
                <Stars
                    default={detail_product.star_average}
                    count={5}
                    half={true}
                    starSize={5}
                    fullStar={<Ionicons size={15} name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={
                        <Ionicons size={15} name={'star-outline'}
                                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>
                    }
                    halfStar={<Ionicons size={15} name={'star-half-outline'} style={[styles.myStarStyle]}/>}
                />
                <View style={styles.product_eveulation_count_area}>
                    <Text style={styles.product_eveulation_count_text}>281 Değerlendirme</Text>
                    <Entypo name={'chevron-small-right'} size={18} style={styles.product_eveulation_arrow}
                            color={config.APP_COLOR_DARK}/>
                </View>
            </TouchableOpacity>

            <View style={styles.product_campaign_notification_area}>
                <Text style={styles.product_campaign_notification_first_text}>🚀 Acele et! Son 3 günde <Text
                    style={styles.product_campaign_notification_second_text}>500+</Text> ürün satıldı!</Text>
            </View>
        </>
    );
};

export default RateArea;
