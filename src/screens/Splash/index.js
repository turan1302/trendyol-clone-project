import React, {useEffect} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

const Splash = (props) => {

    const {navigation} = props;

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Welcome");
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.safearea_view}>
            <ImageBackground style={styles.welcome_area} source={require('../../assets/splash/splash.jpg')}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea_view : {
        flex : 1
    },

    welcome_area : {
        flex : 1
    }
});

export default Splash;
