import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account';
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Account"} screenOptions={()=>{
            return {
                headerShown : false,
                gestureEnabled : true,
                animation: 'slide_from_right',
                headerTitle: "Hesabım",
                headerTitleStyle : {
                    fontSize : 17
                }
            }
        }}>
            <Stack.Screen name={"Account"} component={Account}/>
        </Stack.Navigator>
    )
}

export default AccountNavigator;
