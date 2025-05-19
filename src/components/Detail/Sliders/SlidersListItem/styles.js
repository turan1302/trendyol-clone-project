import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    slider_background : (position,width,height)=>({
        height: (position === 'LANDSCAPE') ? width * 0.40 : width,
        width: width,
    })
});

export default styles;
