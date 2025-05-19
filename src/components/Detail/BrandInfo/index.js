import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import config from '../../../config';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import brand_info from '../../../config/datas/brand_info';


const BrandInfo = () => {

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const [activeIndex, setActiveIndex] = useState(1);

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
    <View>
        <View style={styles.brand_area}>
            <View style={styles.brand_items_area}>
                <View style={styles.brand_left_items_area}>
                    <Image
                        source={{ uri: brand_info.link }}
                        style={styles.brand_image(position,width,height)}
                    />
                    <View style={styles.brand_name_info_area}>
                        <View style={styles.brand_top_info_area}>
                            <Text
                                style={styles.brand_top_info_text}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {brand_info.name}
                            </Text>
                            <View style={styles.brand_top_rate_area}>
                                <Text style={styles.brand_top_rate_text}>{brand_info.rate}</Text>
                            </View>
                            <Feather name={"info"} size={14} color={"#8c8c8c"} />
                        </View>
                        <Text style={styles.brand_subscriber_text}>
                            {brand_info.subscriber} Takipçi
                        </Text>
                    </View>
                </View>

                <View style={styles.brand_subscribe_win_area}>
                    <TouchableOpacity style={styles.brand_subscribe_button}>
                        <Text style={styles.brand_subscribe_button_text}>Takip Et Kazan</Text>
                    </TouchableOpacity>
                    <Text style={styles.brand_coupon_price}>{brand_info.coupon} Kuponu Var!</Text>
                </View>
            </View>

            <View style={styles.alert_items_area}>
              <View style={styles.alert_icon_area}>
                  <Feather name={"info"} size={15} color={"#8c8c8c"}/>
              </View>
                <Text style={styles.alert_text}>Bu ürün {brand_info.name} tarafından gönderilecektir</Text>
            </View>
        </View>
    </View>
  )
}

export default BrandInfo;
