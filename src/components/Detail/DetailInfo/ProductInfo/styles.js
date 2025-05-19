import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    product_name_area : {
        flexDirection : "row",
        marginTop : -5,
        padding : 10
    },

    product_brand_text : {
        color : config.APP_COLOR_DARK,
        fontWeight : "700",
        marginRight : 10,
    },

    product_brand_name : {
        width : "88%",
        color : "#a4a4a4",
        fontWeight : "bold"
    }
});

export default styles;
