import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    header_area : {
        backgroundColor : config.APP_COLOR_WHITE,
        padding : 15,
        flexDirection : "row",
        alignItems : "center",
    },
    header_left_area : {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 1,
        borderRadius: 30,
    },
    search_icon : {
        marginLeft: 10,
    },

    input_area : {
        paddingLeft: 10,
        flex: 1,
        color: config.APP_COLOR_DARK,
    },

    input_camera_icon : {
        marginRight : 10
    },

    header_right_area : {
        marginLeft : 15,
        flexDirection : "row",
        alignItems : "center"
    },

    header_right_bell_icon_button : {
        marginLeft : 16
    }
});

export default styles;
