import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import config from '../config';
import {Dimensions, Image} from 'react-native';
import HomeNavigator from './HomeNavigator';
import TrendyolGoNavigator from './TrendyolGoNavigator';
import { Grayscale } from 'react-native-color-matrix-image-filters';
import CartNavigator from './CartNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavouriteNavigator from './FavouriteNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AccountNavigator from './AccountNavigator';


const Tab = createBottomTabNavigator();

const WelcomeNavigator = () => {
    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const position = (windowDimensions.width < windowDimensions.height) ? 'PORTRAIT' : 'LANDSCAPE';

    const handleResize = () => {
        setWindowDimensions(Dimensions.get('window'));
    };

    useEffect(() => {
        let windowListener = Dimensions.addEventListener('change', handleResize);

        return () => {
            windowListener?.remove;
        };
    }, []);

    const TrendyolGoLogo = ()=>(
        <Image source={require("../assets/logo/tendyol-go-logo.png")} style={{
            objectFit : "contain",
            width : (position==="PORTRAIT") ? windowDimensions.width * 0.20 : windowDimensions.height * 0.20,
            height : (position==="PORTRAIT") ? windowDimensions.width * 0.10 : windowDimensions.height * 0.10
        }}/>
    )

    return (
        <Tab.Navigator initialRouteName={'HomeNavigator'} screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveTintColor: config.APP_COLOR,
            tabBarInactiveTintColor: config.APP_COLOR_DARK,
            tabBarLabelStyle: {
                marginBottom: (position==="PORTRAIT") ? 5 : null,
            },
            tabBarIconStyle: {
                marginTop: 5,
            },
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: 50,
                shadowColor : "transparent"
            },
            headerShown: false,
            animationEnabled: true,
        }}>
            <Tab.Screen options={({navigation, route}) => {
                return {
                    title: 'Anasayfa',
                    tabBarIcon: ({focused}) => (
                        <Ionicons color={(focused) ? config.APP_COLOR : config.APP_COLOR_DARK} name={(focused) ? 'home' : 'home-outline'}
                                     size={25}/>
                    ),
                };
            }} name={'HomeNavigator'} component={HomeNavigator}/>
            <Tab.Screen options={({navigation, route}) => {
                return {
                    title: 'Trendyol Go',
                    tabBarLabelStyle : {
                        display : "none"
                    },
                    tabBarIcon: ({focused}) => {
                        return (!focused) ? <Grayscale><TrendyolGoLogo/></Grayscale> : <TrendyolGoLogo/>
                    },
                };
            }} name={'TrendyolGoNavigator'} component={TrendyolGoNavigator}/>
            <Tab.Screen options={({navigation, route}) => {
                return {
                    title: 'Favorilerim',
                    headerShown : false,
                    tabBarIcon: ({focused}) => (
                        <FontAwesome color={(focused) ? config.APP_COLOR : config.APP_COLOR_DARK} name={(focused) ? 'heart' : 'heart-o'}
                                  size={25}/>
                    ),
                };
            }} name={'FavouriteNavigator'} component={FavouriteNavigator}/>
            <Tab.Screen options={({navigation, route}) => {
                return {
                    title: 'Sepetim',
                    tabBarIcon: ({focused}) => (
                        <Ionicons color={(focused) ? config.APP_COLOR : config.APP_COLOR_DARK} name={(focused) ? 'cart' : 'cart-outline'}
                                  size={25}/>
                    ),
                };
            }} name={'CartNavigator'} component={CartNavigator}/>

            <Tab.Screen options={({navigation, route}) => {
                return {
                    title: 'Hesabım',
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons color={(focused) ? config.APP_COLOR : config.APP_COLOR_DARK} name={(focused) ? 'account' : 'account-outline'}
                                  size={25}/>
                    ),
                };
            }} name={'AccountNavigator'} component={AccountNavigator}/>

        </Tab.Navigator>
    );
};

export default WelcomeNavigator;
