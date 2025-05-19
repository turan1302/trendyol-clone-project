import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import config from '../../../config';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = () => {
    return (
        <View style={styles.header_area}>
            <View style={styles.header_left_area}>
                <Feather name={'search'} size={20} style={styles.search_icon} color={config.APP_COLOR}/>
                <TextInput style={styles.input_area}
                           placeholderTextColor={config.APP_INPUT_PLACEHOLDER_TEXT_COLOR}
                           placeholder={'Marka, Ürün veya Kategori Ara..'}/>
               <TouchableOpacity>
                   <Ionicons name={"camera-outline"} size={23} color={config.APP_SEARCH_CAMERA_BUTTON_COLOR} style={styles.input_camera_icon}/>
               </TouchableOpacity>
            </View>
            <View style={styles.header_right_area}>
                <TouchableOpacity>
                    <Feather name={"mail"} size={23} color={config.APP_COLOR_DARK}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_right_bell_icon_button}>
                    <Feather name={"bell"} size={23} color={config.APP_COLOR_DARK}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomHeader;
