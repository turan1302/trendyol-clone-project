import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    colors_area : {
        borderBottomWidth : 1,
        paddingHorizontal : 10,
        borderBottomColor : "#ccc",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    colors_area_title : {
        marginVertical : 10,
        marginRight  :5,
        fontWeight : "500",
        fontSize : 16,
        color : "#2f2f2f"
    },

    colors_area_subtitle : {
        fontWeight : "500",
        fontSize : 13,
        color : "#8c8c8c"
    },

    flatlist_style : {
        marginTop : 5
    },

    colors_button : (selectedColor,id)=>({
        backgroundColor: "#ffffff",
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius : 8,
        flex : 1,
        borderWidth : 1.1,
        borderColor : (selectedColor!==id) ? "#8c8c8c" : config.APP_COLOR
    }),

    colors_button_image : (position,width,height)=>({
        width : (position==="PORTRAIT") ? width * 0.24 : height * 0.38,
        height : (position==="PORTRAIT") ? height * 0.20 : width * 0.30
    }),
});

export default styles;
