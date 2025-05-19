import React, {useEffect} from 'react'
import {SafeAreaView, StyleSheet} from "react-native";
import Routes from "./src/routes";
import config from "./src/config";
import Orientation from 'react-native-orientation-locker';

const App = () => {

    useEffect(() => {
        Orientation.lockToPortrait();
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);

    return (
        <SafeAreaView style={styles.background}>
            <Routes/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: config.APP_COLOR_GRAY
    }
});

export default App;
