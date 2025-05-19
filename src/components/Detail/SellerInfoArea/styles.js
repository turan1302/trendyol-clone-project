import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    welcome_area : {
        paddingHorizontal : 10,
        marginBottom : 8
    },

    product_seller_info_area_top : {
        flexDirection : "row",
        alignItems :"center",
        justifyContent : "space-between"
    },

    product_seller_info_area_top_left_button : {
        flexDirection : "row",
        alignItems : "center"
    },

    product_seller_info_area_top_left_button_text : {
        fontWeight : "500",
        color : config.APP_COLOR_DARK
    },

    product_seller_info_area_top_left_button_brand_text : {
        fontWeight : "500",
        color : "#0496ff"
    },

    product_seller_info_area_top_left_button_brand_rate_average : {
        marginLeft: 5,
        backgroundColor: 'green',
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 5,
        color: config.APP_COLOR_WHITE,
        marginRight: 4,
    },

    product_seller_info_qa_button : {
        flexDirection: 'row',
        alignItems: 'center',
    },

    product_seller_qa_button_text : {
        color : config.APP_COLOR_DARK
    },

    product_seller_qa_button_arrow : {
        marginTop: 3,
    },


    product_ship_area : {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },
    product_ship_text : {
        marginLeft: 5,
        color: '#505050',
    },
    product_ship_time_text : {
        color: config.APP_COLOR_DARK,
        fontWeight: '600',
        marginLeft: 3,
    },

    product_ship_location_area : {
        marginTop: 10,
        backgroundColor: '#e8e8e8',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    product_ship_location_left_area : (position)=>({
        flexDirection: 'row',
        alignItems: 'center',
        flex: (position==="PORTRAIT") ? 0.5 : 0.7,
    }),
    product_ship_location_image : (position,windowDimensions)=>({
        width: (position === 'PORTRAIT') ? windowDimensions.height * 0.10 : windowDimensions.height * 0.30,
        height: (position === 'PORTRAIT') ? windowDimensions.width * 0.10 : windowDimensions.width * 0.10,
        objectFit: 'fill',
    }),
    product_ship_location_info_area : {
        marginLeft: 5,
    },
    product_ship_location_title_area : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    product_ship_location_title : {
        fontSize: 12,
        marginRight: 2,
    },
    product_ship_location_text : {
        fontSize: 12,
        color: config.APP_COLOR_DARK,
        fontWeight: '500',
    },

    product_location_button_area : (position)=>({
        marginRight: 10,
        borderWidth: 1,
        padding: 3,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        flex: (position==="PORTRAIT") ? 0.30 : 0.15,
        overflow: 'hidden',
        borderColor: config.APP_COLOR,
        backgroundColor: config.APP_COLOR_WHITE,
    }),
    product_location_button_icon : {
        marginLeft : 4
    },
    product_location_button_text : {
        marginLeft: 5,
        marginRight: 15,
        paddingRight: 5,
        width: '85%',
        color: config.APP_COLOR,
    }
});

export default styles;
