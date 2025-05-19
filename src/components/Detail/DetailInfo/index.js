import React from 'react';
import {View} from 'react-native';
import TrendInfo from './TrendInfo';
import styles from './styles';
import ProductInfo from './ProductInfo';
import RateArea from '../RateArea';
import PropertyArea from '../PropertyArea';
import SellerInfoArea from '../SellerInfoArea';

const DetailInfo = () => {
    return (
        <View>
           <View  style={styles.welcome_area}>
               <TrendInfo/>
               <ProductInfo/>
               <RateArea/>
               <PropertyArea/>
           </View>
            <SellerInfoArea/>
        </View>
    );
};

export default DetailInfo;
