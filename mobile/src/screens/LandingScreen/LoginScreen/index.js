import React from "react";
import styles from './styles';
import { View, Text } from "react-native";
import { AppButton, AppTextInput } from "../../../components";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../redux/reducer/User';

export default function LoginScreen({navigation}){
    
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(setUserData({id: 1, name: 'Test1'}))
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>1316 Ministry</Text>
                <AppTextInput 
                    placeholder="Enter username here..."
                    title="Username"
                />
                <View style={{height: 15}} />
                <AppTextInput 
                    placeholder="Enter password here..."
                    title="Password"
                    secureTextEntry={true}
                />
                <View style={{height: 18}} />
                <AppButton 
                    name="Login"
                    onPress={onLogin}
                />
            </View>
        </View>
    )
}