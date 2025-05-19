import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={()=>{
            return {
                headerShown : false,
                gestureEnabled : true,
                animation: 'slide_from_right'
            }
        }}>
            <Stack.Screen name={"Home"} component={Home}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator
