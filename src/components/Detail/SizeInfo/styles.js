import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    size_area : {
        borderBottomWidth : 1,
        paddingHorizontal : 10,
        borderBottomColor : "#ccc"
    },
    size_area_title : {
        marginVertical : 10,
        fontWeight : "500",
        fontSize : 16,
        color : "#2f2f2f"
    },

    size_select_area : {
        padding : 10,
        marginBottom : -10
    },

    size_select_style : {
        borderRadius : 5
    },

    alert_area : {
        padding : 10
    },

    alert_items_area : {
        backgroundColor : "#efefef",
        flexDirection : "row",
        flex :1,
        alignItems : "center",
        borderRadius : 20
    },

    alert_icon_area : {
        padding : 9,
        backgroundColor : config.APP_COLOR,
        borderRadius : 20,
        marginRight : 7
    },

    alert_text : {
        flex : 1,
        fontWeight : "500",
        color : config.APP_COLOR_DARK,
        fontSize : 13
    }
});

export default styles;
