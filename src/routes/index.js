import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../../src/NavigationService';
import WelcomeNavigator from './WelcomeNavigator';
import Splash from '../screens/Splash';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={'Splash'} screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_right',
                statusBarHidden : false
            }}>
                <Stack.Screen name={'Welcome'} component={WelcomeNavigator}/>
                <Stack.Screen name={'Detail'} component={Detail}/>
                <Stack.Screen options={{
                    statusBarHidden : true
                }} name={'Splash'} component={Splash}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
