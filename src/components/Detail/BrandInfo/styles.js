import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    brand_area : {
        padding : 10,
    },

    brand_items_area : {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    brand_left_items_area : {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.7
    },

    brand_image : (position,width,height)=>({
        width: (position === "PORTRAIT") ? width * 0.10 : height * 0.20,
        height: (position === "PORTRAIT") ? height * 0.05 : width * 0.20,
        borderWidth: 0.6,
        borderColor: "#8c8c8c",
        borderRadius: 20,
        marginRight: 5
    }),

    brand_name_info_area : { flex: 1 },

    brand_top_info_area : {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap"
    },

    brand_top_info_text : {
        fontWeight: "bold",
        fontSize: 13,
        flexShrink: 1
    },

    brand_top_rate_area : {
        marginLeft: 4,
        backgroundColor: "#259800",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 4
    },

    brand_top_rate_text : {
        color: config.APP_COLOR_WHITE,
    },

    brand_subscriber_text : {
        color: config.APP_COLOR_DARK,
        flexShrink: 1
    },

    brand_subscribe_win_area : {
        flex: 0.3,
        alignItems: "center",
        marginLeft : 4
    },

    brand_subscribe_button : {
        borderWidth: 1,
        borderColor: "#ef04b2",
        padding: 3,
        borderRadius: 5,
    },

    brand_subscribe_button_text : {
        color: "#ef04b2",
        fontWeight: "bold"
    },

    brand_coupon_price : {
        fontSize: 12,
        marginTop: 7,
        color: "#ef04b2",
        alignSelf: "center"
    },

    alert_items_area : {
        flexDirection : "row",
        flex :1,
        alignItems : "center",
        borderTopWidth : 0.7,
        borderColor : "#8c8c8c",
        marginTop : 10
    },

    alert_icon_area : {
        padding : 9,
        borderRadius : 20,
    },

    alert_text : {
        flex : 1,
        fontWeight : "400",
        color : config.APP_COLOR_DARK,
        fontSize : 13
    }
});

export default styles;
