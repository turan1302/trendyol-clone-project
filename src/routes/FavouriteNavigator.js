import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from '../screens/Favourites';
const Stack = createNativeStackNavigator();

const FavouriteNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Favourites"} screenOptions={()=>{
            return {
                headerShown : false,
                gestureEnabled : true,
                animation: 'slide_from_right',
            }
        }}>
            <Stack.Screen name={"Favourites"} component={Favourites}/>
        </Stack.Navigator>
    )
}

export default FavouriteNavigator;
