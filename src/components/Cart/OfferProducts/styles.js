import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    offer_products_area : {
        backgroundColor : config.APP_COLOR_WHITE,
        padding : 10,
        elevation : 2,
    },
    offer_products_title_area : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        paddingBottom : 10,
        padding : 12,
        borderBottomWidth : 0.1,
        borderColor : "#cecece"
    },
    offer_products_left_title : {
        fontWeight : "500"
    },
    offer_products_more_button_area : {
        flexDirection : "row",
        alignItems : "center"
    },
    offer_products_button_text : {
        color : config.APP_COLOR,
        fontWeight : 500
    }
});

export default styles;
