import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    marquee_area : (data,currentIndex)=>({
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor : data[currentIndex].color,
        marginTop : 3,
        marginHorizontal : 1
    }),

    marquee_text : (animatedValue)=>({
        transform: [{ translateX: animatedValue }],
        color : config.APP_COLOR_WHITE,
        fontWeight : "400"
    })
});

export default styles;
