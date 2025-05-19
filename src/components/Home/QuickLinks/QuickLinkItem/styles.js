import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    button_area : {
        alignItems : "center"
    },

    item_image : (position,width,height)=>({
        width: (position === 'PORTRAIT') ? width * 0.23 : height * 0.30,
        height: (position === 'PORTRAIT') ? width * 0.15 : height * 0.20,
    }),

    slogan_area : (item)=>({
        position: 'absolute',
        bottom: -8,
        alignSelf: 'center',
        backgroundColor: item.color,
        paddingVertical: 1,
        paddingHorizontal : 4,
        borderRadius: 13,
    }),
    slogan_text : {
        textAlign: 'center',
        fontSize: 11,
        fontWeight: 'bold',
        color: config.APP_COLOR_WHITE,
    },

    item_name_area : (position,width,height) =>({
        marginTop: 14,
        width: (position === 'PORTRAIT') ? width * 0.20 : height * 0.30,
    }),
    item_text : {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12.3,
        color: config.APP_COLOR_DARK,
    }
});

export default styles;
