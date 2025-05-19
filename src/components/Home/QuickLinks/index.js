import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList,View} from 'react-native';
import quick_links from '../../../config/datas/home/quick_links';
import styles from './styles';
import QuickLinkItem from './QuickLinkItem';

const QuickLinks = () => {
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
            <FlatList data={quick_links} horizontal showsHorizontalScrollIndicator={false}
                      keyExtractor={(item, index) => index} renderItem={({item, index}) => (
               <QuickLinkItem item={item} position={position} width={width} height={height}/>
            )}/>
        </View>
    );
};

export default QuickLinks;
