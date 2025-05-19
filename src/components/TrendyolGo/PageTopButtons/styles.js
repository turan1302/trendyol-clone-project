import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    buttons_area : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },

    left_button : (position)=>({
        backgroundColor: '#e7ffe4',
        padding: 10,
        aspectRatio: (position==="PORTRAIT") ? 1 / 1.33 : 1/0.7,
        width: '48%',
        borderRadius : 10,
        elevation : 2,
    }),
    left_button_title : {
        fontWeight: '500',
        fontSize : 20,
        textAlign: 'center',
    },
    left_button_subtitle : {
        fontWeight: 'bold',
        color: config.APP_COLOR,
        textAlign: 'center',
    },
    left_button_image : (position,width,height)=>({
        width: (position === 'PORTRAIT') ? width * 0.30 : height * 0.30,
        height: (position === 'PORTRAIT') ? width * 0.30 : height * 0.30,
        objectFit: 'contain',
        alignSelf : "center",
        marginTop : 15
    }),
    left_button_bottom_button_area : {
        padding : 5,
        backgroundColor : "#35a025",
        marginTop : 5,
        borderRadius : 5
    },
    left_button_bottom_button_text : {
        textAlign : "center",
        fontWeight : "bold",
        color : config.APP_COLOR_WHITE
    },

    right_button : (position)=>({
        backgroundColor: '#fff2ec',
        padding: 10,
        aspectRatio: (position==="PORTRAIT") ? 1 / 1.33 : 1/0.7,
        width: '48%',
        borderRadius : 10,
        elevation : 2
    }),
    right_button_title : {
        fontWeight: '500',
        textAlign: 'center',
        fontSize : 20,
    },
    right_button_subtitle : {
        fontWeight: 'bold',
        color: config.APP_COLOR,
        textAlign: 'center',
    },
    right_button_image : (position,width,height)=>({
        width: (position === 'PORTRAIT') ? width * 0.30 : height * 0.30,
        height: (position === 'PORTRAIT') ? width * 0.30 : height * 0.30,
        objectFit: 'contain',
        alignSelf : "center",
        marginTop : 15
    }),
    right_button_bottom_button_area : {
        padding : 5,
        backgroundColor : "#f89649",
        marginTop : 5,
        borderRadius : 5
    },
    right_button_bottom_button_text : {
        textAlign : "center",
        fontWeight : "bold",
        color : config.APP_COLOR_WHITE
    }
});

export default styles;
