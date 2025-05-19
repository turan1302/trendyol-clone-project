import {StyleSheet} from 'react-native';
import config from '../../../config';
import trendyolGo from '../../../config/datas/trendyolGo';

const styles = StyleSheet.create({
    fast_market_title :{
        fontWeight: '500',
        color: config.APP_COLOR_DARK,
        fontSize: 17,
        marginTop : 5
    },

    flatlist_style : {
        marginTop : 10
    },
    item_button : (item,index,position,width,height)=>({
        backgroundColor: item.backgroundColor,
        padding: 10,
        marginEnd: (index === trendyolGo.length - 1) ? null : 20,
        width: (position === 'PORTRAIT') ? height * 0.30 : height * 0.50,
        height: (position === 'PORTRAIT') ? width * 0.25 : width * 0.15,
        overflow: 'hidden',
        elevation: 2,
        borderRadius: 10,
        marginBottom : 10
    }),
    button_text : {
        width: 150,
        fontWeight: 'bold',
    },
    button_image : (position,width,height)=>({
        marginTop: (position === 'PORTRAIT') ? 40 : 15,
        marginLeft: (position === 'PORTRAIT') ? 140 : 125,
        position: 'absolute',
        width: (position === 'PORTRAIT') ? height * 0.15 : height * 0.20,
        height: (position === 'PORTRAIT') ? width * 0.15 : width * 0.20,
        objectFit: 'contain',
    }),
    detail_button_area : {
        marginTop : 27,
        backgroundColor  : config.APP_COLOR,
        alignSelf : "flex-start",
        padding : 5,
        borderRadius : 5
    },
    detail_button_icon : {
        fontWeight : "bold"
    }
});

export default styles;
