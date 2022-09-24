import React from "react";
import { SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initializer from "./initializer";
import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';

const Stack = createStackNavigator();

export default function RootStackNavigation(){

    return (
        <Initializer>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <Stack.Navigator 
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="SignupScreen"
                            component={SignupScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Initializer>
    )
}