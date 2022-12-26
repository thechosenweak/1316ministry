import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '../../screens/LandingScreen';

const Stack = createStackNavigator();

const LandingStack = () => {
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
            <Stack.Group screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default LandingStack;