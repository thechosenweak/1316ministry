import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import MainStackNavigation from './MainStackNavigation';
import LandingStackNavigation from './LandingStackNavigation';

const RootStackNavigator = () => {
  
    const userData = useSelector((state) => state.user.userData);

    const RootStack = () => (
        <NavigationContainer>
            {userData !== null ? (
                <LandingStackNavigation />
            ) : (
                <MainStackNavigation />
            )}
        </NavigationContainer>
    )

    return (
        <>
            <RootStack />
        </>
    )
}

export default RootStackNavigator;
