import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    slider_background : (position,width,height)=>({
        height: (position === 'LANDSCAPE') ? height * 0.40 : width * 0.40,
        width: width,
    })
});

export default styles;
