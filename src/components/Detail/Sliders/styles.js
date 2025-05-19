import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    slider_style : {
        borderBottomWidth : 0.2,
        borderBottomColor : "#ccc",
    },

    pagination_text : (position,height,width)=>({
        position: 'absolute',
        marginTop: (position === 'PORTRAIT') ? height * 0.490 : height * 0.670,
        color: config.APP_COLOR_WHITE,
        backgroundColor: config.APP_COLOR_DARK,
        opacity: 0.6,
        padding: 2,
        right: (position === 'PORTRAIT') ? width * 0.48 : width * 0.48,
        borderRadius: 3,
    }),

    free_shipping_area : (position,width,height)=>({
        position: 'absolute',
        backgroundColor: "#8c8c8c",
        paddingVertical: 4,
        paddingHorizontal : 10,
        flexDirection: "row",
        alignItems: "center",
        width : (position==="PORTRAIT") ? width * 0.35 : height * 0.35,
    }),
    free_shipping_text_area : { flexDirection: "column", marginLeft: 10 },
    free_shipping_first_text : {
        fontWeight: "bold",
        color: config.APP_COLOR_WHITE,
    },
    free_shipping_second_text : {
        fontWeight: "bold",
        color: config.APP_COLOR_WHITE,
    },

    favourites_area : {
        position: 'absolute',
        backgroundColor: config.APP_COLOR_WHITE,
        padding: 10,
        right: 10,
        marginTop : 30,
        borderRadius: 100,
    },

    all_properties_area : {
        backgroundColor: "#fff",
        padding : 1,
        alignSelf : "flex-end",
        marginRight : 10,
        marginTop : -10,
        paddingHorizontal : 10,
        borderWidth : 0.20,
        borderRadius : 10,
        elevation : 2
    },

    all_properties_button_area : {
        flexDirection : "row",
        alignItems : "center"
    },

    all_properties_button_text : {
        fontWeight : "500",
        marginLeft : 4,
        marginRight : -2
    }
});

export default styles;
