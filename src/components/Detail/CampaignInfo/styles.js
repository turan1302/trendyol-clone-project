import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    campaign_area : {
        borderBottomWidth : 1,
        paddingHorizontal : 10,
        borderBottomColor : "#ccc"
    },
    campaign_area_title : {
        marginVertical : 10,
        fontWeight : "500",
        fontSize : 16,
        color : "#2f2f2f"
    },

    button_area : {
        marginHorizontal: 10,
        paddingHorizontal : 10,
        paddingVertical : 5,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: "#808080",
        borderRadius: 7,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },

    button_left_items_area : {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },

    button_left_item_icon_area : {
        backgroundColor: config.APP_COLOR,
        padding: 5,
        borderRadius: 5
    },

    button_left_text_area : {
        marginLeft : 10
    },

    button_left_text_title : {
        color : config.APP_COLOR_DARK,
        fontWeight : "600",
        fontSize : 14
    },

    button_left_text_subtitle : {
        marginLeft : 2,
        fontWeight : "500",
        color : "#c70000",
        fontSize : 12
    }
});

export default styles;
