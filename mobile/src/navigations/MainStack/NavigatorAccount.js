import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AccountScreen, AttendanceScreen, GroupScreen, MemberScreen, RoleScreen } from '../../screens/MainScreen';

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
            <Stack.Screen name="Attendance" component={AttendanceScreen} />  
            <Stack.Screen name="Group" component={GroupScreen} />  
            <Stack.Screen name="Member" component={MemberScreen} />  
            <Stack.Screen name="Role" component={RoleScreen} />  
        </Stack.Navigator>
    );
}

export default NavigatorAccount;