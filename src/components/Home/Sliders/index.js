import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import sliders from '../../../config/datas/home/sliders';
import SlidersListItem from './SlidersListItem';
import styles from './styles';

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
            <FlatList horizontal bounces snapToAlignment={'center'} snapToInterval={width} decelerationRate={'fast'}
                      showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index} data={sliders}
                      renderItem={({item, index}) => (
                         <SlidersListItem position={position} width={width} height={height} item={item}/>
                      )}
                      onViewableItemsChanged={onViewableItemsChanged}
                      viewabilityConfig={viewabilityConfig}
            >
            </FlatList>
            <Text style={styles.pagination_text(position,height,width)}>
                {activeIndex}/{sliders.length}
            </Text>
        </View>
    );
};

export default Sliders;
