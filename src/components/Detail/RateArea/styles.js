import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    myStarStyle: {
        color: config.APP_COLOR,
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: config.APP_COLOR,
    },

    product_eveulation_area : {
        flexDirection : "row",
        alignSelf : "flex-start",
        alignItems : "center",
        marginTop : 10,
        paddingHorizontal : 10
    },

    product_eveulation_average_text : {
        color : config.APP_COLOR_DARK,
        marginRight : 5
    },

    product_eveulation_count_area : {
        marginLeft: 5,
        paddingHorizontal: 5,
        borderLeftWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    product_eveulation_count_text : {
        color : config.APP_COLOR_DARK
    },

    product_eveulation_arrow : {
        marginTop : 3
    },

    product_campaign_notification_area : {
        flexDirection : "row",
        alignSelf : "flex-start",
        alignItems : "center",
        marginTop : 5,
        paddingHorizontal : 10
    },

    product_campaign_notification_first_text : {
        color : config.APP_COLOR_DARK,
        marginRight : 5,
        fontWeight : "bold"
    },

    product_campaign_notification_second_text : {
        color : config.APP_COLOR,
        fontWeight : "bold"
    }
});

export default styles;
