import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CustomHeader from '../../components/Detail/CustomHeader';
import Sliders from '../../components/Detail/Sliders';
import styles from './styles';
import DetailInfo from '../../components/Detail/DetailInfo';
import CouponInfo from '../../components/Detail/CouponInfo';
import detail_product from '../../config/datas/detail/detail_product';
import config from '../../config';
import CampaignInfo from '../../components/Detail/CampaignInfo';
import ColorInfo from '../../components/Detail/ColorInfo';
import SizeInfo from '../../components/Detail/SizeInfo';
import BrandInfo from '../../components/Detail/BrandInfo';

const Detail = () => {

    const [selectedColor,setSelectedColor] = useState(1);
    const [selectedSize,setSelectedSize] = useState(2);

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
            <View style={styles.top_flex_style}>
                <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                    <>
                        <CustomHeader/>
                    </>

                    <View style={styles.product_detail_area}>
                        <Sliders/>
                        <DetailInfo/>
                    </View>

                    <View style={styles.product_coupon_area}>
                        <CouponInfo/>
                    </View>

                    <View style={styles.product_campaign_area}>
                        <CampaignInfo/>
                    </View>

                    <View style={styles.product_color_area}>
                        <ColorInfo selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                    </View>

                    <View style={styles.product_size_area}>
                        <SizeInfo selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                    </View>

                    <View style={styles.product_brand_area}>
                        <BrandInfo/>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.bottom_flex_style(position,width,height)}>
                <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 9,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                    <View style={{
                        flex: 0.35,
                    }}>
                        <Text style={{
                            color: config.APP_COLOR,
                            fontWeight: 'bold',
                            fontSize: 17,
                        }}>{detail_product.price} TL</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#059805',
                        }}>Kargo Bedava</Text>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: config.APP_COLOR,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        flex: 0.65,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: config.APP_COLOR_WHITE,
                            fontWeight: 'bold',
                        }}>Sepete Ekle</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Detail;
