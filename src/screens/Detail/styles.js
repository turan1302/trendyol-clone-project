import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    welcome_area : {
        flex : 1,
        backgroundColor : "#f1f1f1",
    },

    top_flex_style : {
        flex : 0.928,
    },

    bottom_flex_style : (position,width,height)=>({
        flex : (position==="PORTRAIT") ? 0.082 : 0.17,
        backgroundColor : "#fff",
        flexDirection : "row",
        borderTopWidth : 1,
        borderTopColor : "#d5d5d5",
        paddingVertical : 5
    }),

    product_detail_area : {
        paddingTop : 10,
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },

    product_coupon_area : {
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },

    product_campaign_area : {
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },

    product_color_area : {
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },

    product_size_area : {
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },

    product_brand_area : {
        backgroundColor : "#fff",
        marginBottom : 10,
        elevation : 4
    },
});

export default styles;
