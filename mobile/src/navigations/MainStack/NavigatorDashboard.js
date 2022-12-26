import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { DashboardScreen } from '../../screens/MainScreen';

const Stack = createStackNavigator();

const NavigatorDashboard = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen name="Dashboard" component={DashboardScreen} />  
        </Stack.Navigator>
    );
}

export default NavigatorDashboard;