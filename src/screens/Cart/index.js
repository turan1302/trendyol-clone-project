import React from 'react';
import {View} from 'react-native';
import OfferProducts from '../../components/Cart/OfferProducts';
import styles from './styles';

const Cart = () => {
    return (
        <View style={styles.welcome_area}>
            <OfferProducts/>
        </View>
    );
};

export default Cart;
