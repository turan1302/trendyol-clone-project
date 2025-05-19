import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import config from '../../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import opportunity_products from '../../../config/datas/home/opportunity_products';
import PopularProductListItem from './PopularProductListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopularProduct = () => {
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
            <View style={styles.popular_product_header_area}>
                <Text style={styles.popular_product_header_left_text}>Popüler Ürünler</Text>
                <TouchableOpacity style={styles.popular_product_header_right_area}>
                    <Text style={styles.popular_product_header_right_text}>Tüm Ürünler</Text>
                    <AntDesign name={'right'} color={config.APP_COLOR} size={15}/>
                </TouchableOpacity>
            </View>
            <View style={styles.popular_product_container}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal data={opportunity_products}
                          keyExtractor={(item, index) => index}
                          renderItem={({item, index}) => (
                              <PopularProductListItem item={item}/>
                          )}
                          ListFooterComponent={()=>(
                              <TouchableOpacity style={{
                                  marginRight: 10,
                                  marginBottom: 10,
                                  borderWidth: 0.01,
                                  borderColor: config.APP_COLOR_GRAY,
                                  borderRadius: 10,
                                  shadowColor: 'gray',
                                  elevation: 2,
                                  height: (position === 'PORTRAIT') ? height * 0.36 : width * 0.37,
                                  width: (position === 'PORTRAIT') ? height * 0.18 : width * 0.20,
                                  justifyContent : "center",
                                  backgroundColor : "#b0b0b0"
                              }}>
                                 <View>
                                     <Text style={{
                                         color : config.APP_COLOR_WHITE,
                                         textAlign : "center",
                                         fontWeight : "400",
                                         fontSize : 17
                                     }}>Tümünü Gör</Text>
                                     <Ionicons name={"chevron-forward-circle-outline"} size={25} color={config.APP_COLOR_WHITE} style={{
                                         textAlign : "center",
                                         marginTop : 10
                                     }}/>
                                 </View>
                              </TouchableOpacity>
                          )}
                />
            </View>
        </View>
    );
};

export default PopularProduct;
