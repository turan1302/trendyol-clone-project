import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrendyolGo from '../screens/TrendyolGo';
const Stack = createNativeStackNavigator();

const TrendyolGoNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"TrendyolGo"} screenOptions={()=>{
            return {
                headerShown : true,
                gestureEnabled : true,
                animation: 'slide_from_right',
                headerTitle: "Trendyol Go",
            }
        }}>
            <Stack.Screen name={"TrendyolGo"} component={TrendyolGo}/>
        </Stack.Navigator>
    )
}

export default TrendyolGoNavigator
