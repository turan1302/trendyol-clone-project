import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    notification_icon_area : {
        alignItems : "center"
    },
    notification_icon_view : {
        backgroundColor: config.APP_COLOR_WHITE,
        padding: 30,
        borderRadius: 100,
        marginTop : 10
    },

    notification_title : {
        textAlign : "center",
        marginTop : 17,
        fontSize : 14,
        fontWeight : "bold",
        color : config.APP_COLOR_DARK
    },
    notification_subtitle : {
        textAlign : "center",
        marginTop : 10,
        color : config.APP_COLOR_DARK
    },

    go_shopping_button : {
        marginVertical : 20,
        backgroundColor : config.APP_COLOR,
        alignItems : "center",
        padding : 10,
        borderRadius : 5
    },
    go_shopping_button_text : {
        color : config.APP_COLOR_WHITE,
        fontWeight : "bold",
        fontSize : 15
    }
});

export default styles;
