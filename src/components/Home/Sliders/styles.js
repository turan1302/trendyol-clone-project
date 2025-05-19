import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    pagination_text : (position,height,width)=>({
        position: 'absolute',
        marginTop: (position === 'PORTRAIT') ? height * 0.175 : width * 0.170,
        color: config.APP_COLOR_WHITE,
        backgroundColor: config.APP_COLOR_DARK,
        opacity: 0.6,
        padding: 2,
        right: 7,
        alignSelf: 'flex-end',
        textAlign: 'center',
        borderRadius: 3,
    })
});

export default styles;
