import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { LoginScreen } from '../../screens/Landing';

const Stack = createStackNavigator();

const LandingStackNavigation = () => {

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >   
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
}

export default LandingStackNavigation;