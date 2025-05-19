import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    coupons_area : {
        borderBottomWidth : 1,
        paddingHorizontal : 10,
        borderBottomColor : "#ccc"
    },
    coupons_area_title : {
        marginVertical : 10,
        fontWeight : "500",
        fontSize : 16,
        color : "#2f2f2f"
    },

    flatlist_style : {
        marginTop : 5
    },

    coupon_button : {
        backgroundColor: "#ffd3bd",
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius : 5,
        flex : 1
    },

    coupon_button_price_text : {
        fontSize: 15,
        fontWeight: "bold",
        color: config.APP_COLOR,
    },

    coupon_button_low_price_text : {
        color: config.APP_COLOR_DARK,
        fontWeight: "400",
        fontSize: 13,
    },

    coupon_win_button_style : {
        marginLeft : 50,
        backgroundColor : config.APP_COLOR,
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5
    },

    coupon_win_button_text_style : {
        fontWeight : "bold",
        fontSize : 13,
        color : config.APP_COLOR_WHITE
    }
});

export default styles;
