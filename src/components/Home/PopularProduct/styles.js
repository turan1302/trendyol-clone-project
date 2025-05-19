import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    welcome_area : {
        padding : 15,
    },
    popular_product_header_area : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    popular_product_header_left_text : {
        color: config.APP_COLOR_DARK,
        fontWeight: '600',
        fontSize: 15,
        alignItems: 'center',
    },

    popular_product_header_right_area : {
        flexDirection: 'row',
        alignItems: 'center',
    },

    popular_product_header_right_text : {
        fontWeight: '500',
        fontSize: 15,
        color: config.APP_COLOR,
        marginRight : 2
    },

    popular_product_container : {
        marginVertical : 20
    }
});

export default styles;
