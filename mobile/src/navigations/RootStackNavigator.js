import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MainStackNavigation from './MainStackNavigation';
import LandingStackNavigation from './LandingStackNavigation';
import Toast from 'react-native-toast-message';
import { APP_TOAST } from '../constants';

const RootStackNavigator = () => {
  
    const userData = useSelector((state) => state.user.userData);
    const [initToast, setInitToast] = React.useState(false);

    const RootStack = () => (
        <NavigationContainer>
            {userData === null ? (
                <LandingStackNavigation />
            ) : (
                <MainStackNavigation />
            )}
        </NavigationContainer>
    )

    setTimeout(() => setInitToast(true), 550);

    return (
        <>
            <RootStack />
            {
                initToast && (
                    <Toast
                        position={APP_TOAST.position}
                        topOffset={APP_TOAST.topOffset}
                        bottomOffset={APP_TOAST.bottomOffset}
                        config={APP_TOAST.config}
                        visibilityTime={APP_TOAST.visibilityTime}
                    />
                )
            }
        </>
    )
}

export default RootStackNavigator;
