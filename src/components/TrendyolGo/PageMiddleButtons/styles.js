import {StyleSheet} from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    button_area : {
        marginVertical: 15,
        backgroundColor: '#d7edff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height : 105,
        overflow : "hidden",
        borderRadius : 10,
        elevation : 2
    },

    button_position : {
        marginTop : 10
    },
    button_title : {
        fontWeight: 'bold',
        width : 90
    },

    button_bottom_button_area : {
        marginTop : 10,
        backgroundColor : "#93c3f8",
        paddingHorizontal : 15,
        paddingVertical : 5,
        borderRadius : 5
    },
    button_bottom_button_title : {
        fontWeight : "bold",
        color : config.APP_COLOR_WHITE,
        textAlign : "center"
    },

    button_image : (position,width,height)=>({
        width : (position==="PORTRAIT") ? width*0.20 : height * 0.20,
        height : (position==="PORTRAIT") ? width*0.30 : height * 0.30,
        marginTop : 20
    })
});

export default styles;
