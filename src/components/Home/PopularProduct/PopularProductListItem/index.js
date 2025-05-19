import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';
import Stars from 'react-native-stars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from '../../../../config';
import PopularProductMarquee from '../PopularProductMarquee';
import * as NavigationService from "../../../../NavigationService";

const PopularProductListItem = (props) => {
    const { item } = props;

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const { width, height } = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const dimensionsSubscription = Dimensions.addEventListener('change', handleResize);

        return () => {
            dimensionsSubscription.remove();
        };
    }, []);

    const handleResize = ({ window }) => {
        setWindowDimensions(window);
    };

    return (
        <TouchableOpacity onPress={()=>{
            NavigationService.navigate("Detail");
        }} style={styles.button_area}>
            <Image
                resizeMode={'contain'}
                source={{ uri: item.image }}
                style={styles.list_item_image(position, width, height)}
            />

            <View style={styles.list_item_info_area}>
                <Text style={styles.list_item_info_brand}>{item.brand}</Text>
                <Text style={styles.list_item_info_text} numberOfLines={1}>
                    {item.product_name}
                </Text>
            </View>

            <View style={styles.list_item_star_rate_area}>
                <Stars
                    default={item.star_average}
                    count={5}
                    half={true}
                    starSize={5}
                    fullStar={<Ionicons size={15} name={'star'} style={[styles.myStarStyle]} />}
                    emptyStar={
                        <Ionicons size={15} name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />
                    }
                    halfStar={<Ionicons size={15} name={'star-half-outline'} style={[styles.myStarStyle]} />}
                />
                <Text style={styles.list_item_star_count_text}>({item.star_count})</Text>
            </View>

            <View style={styles.list_item_price_area}>
                {item.old_price > 0.0 && (
                    <Text style={styles.list_item_old_price}>{item.old_price.toFixed(2)} ₺</Text>
                )}
                <Text style={styles.list_item_price}>{item.price.toFixed(2)} ₺</Text>
            </View>

            <TouchableOpacity style={styles.favourite_button}>
                <AntDesign name={'hearto'} size={18} color={config.APP_COLOR_DARK} />
            </TouchableOpacity>

            {item.advantage_product && (
                <Image
                    source={{
                        uri:
                            'https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png',
                    }}
                    style={styles.advantage_product_notification(position, width, height)}
                />
            )}
            {item.discount_product && (
                <Image
                    source={{
                        uri:
                            'https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/75439ab0-63fd-470d-8c1a-8d2fb65a3a35.png',
                    }}
                    style={styles.discount_product_notification(position, width, height)}
                />
            )}

            <View style={styles.marquee_text_area}>
                <PopularProductMarquee
                    data={item.sliding_text || [{ text: 'Ücretsiz Kargo' }, { text: '24 Saatte Teslimat' }]}
                    baseSpeed={10}
                />
            </View>
        </TouchableOpacity>
    );
};

export default PopularProductListItem;
