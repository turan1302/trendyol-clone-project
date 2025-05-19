import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    header_area : {
        backgroundColor : config.APP_COLOR_WHITE,
        paddingVertical : 13,
        paddingHorizontal : 5,
        flexDirection : "row",
        alignItems : "center",
    },
    header_left_area : {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 1,
        height : 45,
        borderRadius: 30,
    },

    back_icon : {
        marginHorizontal : 7
    },

    search_icon : {
        marginLeft: 4,
    },

    input_area : {
        paddingLeft: 2,
        flex: 1.4,
        color: config.APP_COLOR_DARK,
    },

    input_camera_icon : {
        marginRight : 4
    },

    header_right_area : {
        marginLeft : 13,
        marginHorizontal : 9,
        flexDirection : "row",
        alignItems : "center"
    },

    header_right_share_icon_button : {
        marginLeft : 16
    }
});

export default styles;
