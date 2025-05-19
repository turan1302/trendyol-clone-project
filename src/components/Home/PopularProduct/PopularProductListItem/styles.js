import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    button_area: {
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 0.01,
        borderColor: config.APP_COLOR_GRAY,
        borderRadius: 10,
        shadowColor: 'gray',
        elevation: 2,
    },
    list_item_image: (position, width, height) => ({
        marginTop: 3,
        height: (position === 'PORTRAIT') ? height * 0.18 : width * 0.20,
        width: (position === 'PORTRAIT') ? height * 0.18 : width * 0.20,
    }),
    list_item_info_area: {marginTop: 5, padding: 10, aspectRatio: 2.7 / 1.3},
    list_item_info_brand: {
        color: config.APP_COLOR_DARK,
        fontWeight: '700',
    },
    list_item_info_text: {
        color: config.APP_COLOR_DARK,
    },

    list_item_star_rate_area: {
        alignItems: 'center',
        marginTop: -16,
        padding: 10,
        flexDirection: 'row',
    },

    list_item_star_count_text: {
        marginLeft: 5,
    },

    myStarStyle: {
        color: config.APP_COLOR,
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: config.APP_COLOR,
    },

    list_item_price_area: {
        padding: 10,
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list_item_old_price: {
        textDecorationLine: 'line-through',
        color: '#656565',
        fontWeight: '600',
    },
    list_item_price: {
        color: config.APP_COLOR,
        fontWeight: '700',
    },

    favourite_button: {
        position: 'absolute',
        right: 8,
        top: 8,
        backgroundColor: config.APP_COLOR_WHITE,
        padding: 5,
        borderRadius: 30,
        elevation: 2,
    },

    advantage_product_notification : (position,width,height)=>({
        position : "absolute",
        top : 8,
        left : 8,
        width : (position==="PORTRAIT") ? width * 0.08 : height * 0.08,
        height : (position==="PORTRAIT") ? width * 0.08 : height * 0.08
    }),

    discount_product_notification : (position,width,height)=>({
        position : "absolute",
        top : 88,
        left : 8,
        width : (position==="PORTRAIT") ? width * 0.08 : height * 0.08,
        height : (position==="PORTRAIT") ? width * 0.08 : height * 0.08
    }),

    marquee_text_area : {
        position : "absolute",
        marginTop : 130,
        width: '100%',
    }
});

export default styles;
