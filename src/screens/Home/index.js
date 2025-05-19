import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/Home/CustomHeader';
import Categories from '../../components/Home/Categories';
import Sliders from '../../components/Home/Sliders';
import QuickLinks from '../../components/Home/QuickLinks';
import PopularProduct from '../../components/Home/PopularProduct';
import Brands from '../../components/Home/Brands';
import BrandsProduct from '../../components/Home/BrandsProduct';

const Home = () => {
    return (
        <View style={styles.welcome_area}>
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                <>
                    <CustomHeader/>
                    <Categories/>
                </>
                <Sliders/>
                <QuickLinks/>
                <PopularProduct/>
                <Brands/>
                <BrandsProduct/>
            </ScrollView>
        </View>
    );
};

export default Home;
