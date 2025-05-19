import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const OfferProductsItem = (props) => {

    const {item} = props;

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
            <Image source={{uri : item.image}} style={styles.offer_product_image(position,width,height)}/>
            <View style={styles.offer_product_detail_area(position,width,height)}>
               <View style={styles.offer_product_top_area(position,width,height)}>
                   <Text style={styles.offer_product_brand}>{item.brand}</Text>
                   <Text numberOfLines={1} style={styles.offer_product_name}>{item.name}</Text>
               </View>
               <View style={styles.offer_product_bottom_area}>
                   <Text style={styles.offer_product_price}>{item.price.toFixed(2)} ₺</Text>
                  <TouchableOpacity style={styles.offer_product_add_cart_button_area}>
                      <View style={styles.offer_product_add_cart_button_text_area}>
                          <Text style={styles.offer_produt_add_cart_button_text}>Sepete Ekle</Text>
                      </View>
                  </TouchableOpacity>
               </View>
            </View>
        </View>
    );
};

export default OfferProductsItem;
