import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const QuickLinkItem = (props) => {

    const {position, item, width, height} = props;

    return (
        <TouchableOpacity style={styles.button_area}>
            <ImageBackground source={{uri: item.image}} resizeMode={'contain'}
                             style={styles.item_image(position, width, height)}>
                <View style={styles.slogan_area(item)}>
                    <Text style={styles.slogan_text}>{item.slogan}</Text>
                </View>
            </ImageBackground>
            <View style={styles.item_name_area(position,width,height)}>
                <Text style={styles.item_text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default QuickLinkItem;
