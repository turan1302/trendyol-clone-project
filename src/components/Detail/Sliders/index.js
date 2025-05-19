import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import detail_product from '../../../config/datas/detail/detail_product';
import SlidersListItem from './SlidersListItem';
import styles from './styles';
import config from '../../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Sliders = () => {

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

    const onViewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index + 1);
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    return (
        <View>
            <FlatList style={styles.slider_style} horizontal bounces snapToAlignment={'center'} snapToInterval={width} decelerationRate={'fast'}
                      showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index} data={detail_product.images}
                      renderItem={({item, index}) => (
                         <SlidersListItem position={position} width={width} height={height} item={item}/>
                      )}
                      onViewableItemsChanged={onViewableItemsChanged}
                      viewabilityConfig={viewabilityConfig}
            >
            </FlatList>
            <Text style={styles.pagination_text(position,height,width)}>
                {activeIndex}/{detail_product.images.length}
            </Text>

            {/* KARGO BEDAVA KISMI */}
            <View style={styles.free_shipping_area(position,width,height)}>
                <Ionicons color={config.APP_COLOR_WHITE} size={23} name={"cube"} />
                <View style={styles.free_shipping_text_area}>
                    <Text style={styles.free_shipping_first_text}>KARGO</Text>
                    <Text style={styles.free_shipping_second_text}>BEDAVA</Text>
                </View>
            </View>

            {/* FAVORILER KISMI */}
            <TouchableOpacity style={styles.favourites_area}>
                <AntDesign name={'hearto'} size={18} color={config.APP_COLOR_DARK} />
            </TouchableOpacity>

            {/* TÜM ÖZELLİKLER KISMI */}
            <View style={styles.all_properties_area}>
               <TouchableOpacity>
                    <View style={styles.all_properties_button_area}>
                        <FontAwesome name={"info-circle"} size={15} color={"#2e75ff"}/>
                        <Text style={styles.all_properties_button_text}>Tüm Özellikler</Text>
                        <Entypo name={"chevron-small-right"} size={18} color={config.APP_COLOR_DARK}/>
                    </View>
               </TouchableOpacity>
            </View>
        </View>
    );
};

export default Sliders;
