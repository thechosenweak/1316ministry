import React from "react";
import { SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initializer from "./Initializer";
import LoginScreen from './../screens/LoginScreen';

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
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Initializer>
    )
}