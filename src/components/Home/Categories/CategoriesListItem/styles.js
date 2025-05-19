import {StyleSheet} from 'react-native';
import config from '../../../../config';

const styles = StyleSheet.create({
    welcome_area: (index, categories, selectCategory) => ({
        backgroundColor: (selectCategory === index + 1) ? config.APP_COLOR : config.APP_COLOR_WHITE,
        borderWidth: 1,
        borderColor: config.APP_COLOR_GRAY,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginEnd: (index === categories.length - 1) ? null : 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }),

    icon_style: {
        marginRight: 7,
    },

    button_text: (index,selectCategory) => ({
        color : (selectCategory === index + 1) ? config.APP_COLOR_WHITE : config.APP_COLOR_DARK,
        fontWeight : "400"
    }),
});

export default styles;
