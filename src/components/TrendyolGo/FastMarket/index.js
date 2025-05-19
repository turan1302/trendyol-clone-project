import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import config from '../../../config';
import trendyolGo from '../../../config/datas/trendyolGo';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const FastMarket = () => {

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
        <View>
            <Text style={styles.fast_market_title}>Hızlı Market</Text>
            <FlatList style={styles.flatlist_style} showsHorizontalScrollIndicator={false} data={trendyolGo} horizontal keyExtractor={(item, index) => index}
                      renderItem={({item, index}) => (
                          <TouchableOpacity style={styles.item_button(item,index,position,width,height)}>
                              <Text style={styles.button_text}>{item.text}</Text>
                              <Image source={{uri: item.uri}} style={styles.button_image(position,width,height)}/>
                              <View style={styles.detail_button_area}>
                                <Entypo name={"chevron-right"} style={styles.detail_button_icon} size={20} color={config.APP_COLOR_WHITE}/>
                              </View>
                          </TouchableOpacity>
                      )}/>
        </View>
    );
};

export default FastMarket;
