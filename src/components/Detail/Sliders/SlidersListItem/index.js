import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

const SlidersListItem = (props) => {

    const {position,width,height,item} = props;

    return (
        <TouchableOpacity>
            <ImageBackground resizeMode={'stretch'} source={{uri: item.link}} style={styles.slider_background(position,width,height)}/>
        </TouchableOpacity>
    );
};

export default SlidersListItem;
