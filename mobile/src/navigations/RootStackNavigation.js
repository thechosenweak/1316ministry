import React from "react";
import { SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LandingStack from "./LandingStack";
import MainStack from "./MainStack";
import Initializer from "./Initializers";

export default function RootStackNavigation(){
    
    const userData = useSelector((state) => state.user.userData);

    const AppStack = () => {
        if(userData === null) return <LandingStack />
        return <MainStack />
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Initializer>
                <NavigationContainer>
                    <AppStack />
                </NavigationContainer>
            </Initializer>
        </SafeAreaView>
    )
}