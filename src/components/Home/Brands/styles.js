import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    brand_area : {
        marginTop : -10
    },
    brand_image : (position)=>({
        objectFit: (position==="PORTRAIT") ? "contain" : "fill",
        marginTop : (position==="PORTRAIT") ? -4 : 4,
        width : '100%'
    })
});

export default styles;
