import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Cart"} screenOptions={()=>{
            return {
                headerShown : true,
                gestureEnabled : true,
                animation: 'slide_from_right',
                headerTitle: "Sepetim",
                headerTitleStyle : {
                    fontSize : 17
                }
            }
        }}>
            <Stack.Screen name={"Cart"} component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartNavigator;
