import {StyleSheet} from 'react-native';
import config from '../../config';

const styles = StyleSheet.create({
    scroll_area : {
        padding : 10
    },
    container_area : {
        paddingBottom : 40
    },

    icon_container_area : (position)=>({
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 200,
        padding: 20,
        alignSelf: 'center',
        marginTop : (position === "PORTRAIT") ? 150 : 50,
    }),

    account_text : {
        marginVertical: 10,
        color : config.APP_COLOR_DARK,
        fontWeight : "500",
        fontSize : 17,
        textAlign : "center"
    },
    account_subtext : {
        textAlign : "center",
        color : "#a2a2a2",
        fontWeight : "500"
    },

    login_button_area : {
        marginTop : 40,
        backgroundColor : config.APP_COLOR,
        padding : 10,
        width : "95%",
        borderRadius : 7,
        elevation : 2,
        alignSelf :"center",
    },
    login_button_text : {
        color : config.APP_COLOR_WHITE,
        textAlign : "center",
        fontSize : 15,
        fontWeight : "600"
    }
});

export default styles;
