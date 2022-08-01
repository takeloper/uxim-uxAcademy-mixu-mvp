import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MemberInfoScreen from '../screens/MemberInfoScreen';

import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
            <Stack.Screen name="TestScreen" component={TestScreen} options={{headerShown:false}}/>
            <Stack.Screen name="MemberInfoScreen" component={MemberInfoScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
