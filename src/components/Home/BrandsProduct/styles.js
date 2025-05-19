import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    brand_products_area : {
        padding : 15,
    },

    brands_product_header_area : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginVertical : 20
    },

    brands_product_header_left_title : {
        fontWeight : "500",
        fontSize : 15,
        color : config.APP_COLOR_DARK
    },

    brands_product_header_right_button : {
        flexDirection : "row",
        alignItems : "center"
    },

    brands_product_header_right_button_text : {
        fontWeight : "500",
        fontSize : 15,
        color : config.APP_COLOR,
        marginBottom : 2
    }
});

export default styles;
