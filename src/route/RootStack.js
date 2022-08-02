import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screen/MainScreen.js';
import ListScreen from '../screen/ListScreen.js';
import AddScreen from '../screen/AddScreen.js';

const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerMode: false }}>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen name="AddScreen" component={AddScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootStack;
