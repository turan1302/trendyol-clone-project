import React from 'react';
import {ScrollView, View} from 'react-native';
import PageTopButtons from '../../components/TrendyolGo/PageTopButtons';
import PageMiddleButtons from '../../components/TrendyolGo/PageMiddleButtons';
import FastMarket from '../../components/TrendyolGo/FastMarket';
import styles from './styles';

const TrendyolGo = () => {
    return (
        <View style={styles.welcome_area}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PageTopButtons/>
                <PageMiddleButtons/>
                <FastMarket/>
            </ScrollView>
        </View>
    );
};

export default TrendyolGo;
