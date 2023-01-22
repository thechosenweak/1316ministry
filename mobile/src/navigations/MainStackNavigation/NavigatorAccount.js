import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AccountScreen } from '../../screens/Main';
const Stack = createStackNavigator();

const NavigatorAccount = () => {
    return (
        <Stack.Navigator
            initialRouteName="Account"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default NavigatorAccount;