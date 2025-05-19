import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    welcome_area : {
        flexDirection : "row"
    },
    offer_product_image : (position,width,height)=>({
        objectFit : "cover",
        width : (position==="PORTRAIT") ? width * 0.20 : height * 0.30,
        height : (position==="PORTRAIT") ? width * 0.30 : height * 0.40,
        borderWidth : 1,
        borderColor : config.APP_COLOR_GRAY
    }),
    offer_product_detail_area : (position,width,height)=>({
        marginLeft : 10,
        justifyContent : "space-between",
        width : (position==="PORTRAIT") ? width *0.65 : height * 1.38,
    }),
    offer_product_top_area : (position,width,height)=>({
        flexDirection : "row",
        alignItems : "center",
        width : (position==="PORTRAIT") ? width *0.45 : height * 1.20
    }),
    offer_product_brand : {
        fontWeight : "700",
        color : config.APP_COLOR_DARK,
        marginRight : 10
    },
    offer_product_name : {
        fontWeight : "bold",
        color : "#989898",
    },

    offer_product_bottom_area : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    offer_product_price : {
        color : config.APP_COLOR,
        fontWeight : "600",
        fontSize : 13
    },

    offer_product_add_cart_button_area : {
        backgroundColor : "#fff",
        elevation : 5,
        borderRadius : 4
    },
    offer_product_add_cart_button_text_area : {
        padding : 5,
        borderWidth : 1.5,
        borderColor : config.APP_COLOR,
        borderRadius : 4
    },
    offer_produt_add_cart_button_text : {
        color : config.APP_COLOR,
        fontWeight : 500
    }
});

export default styles;
