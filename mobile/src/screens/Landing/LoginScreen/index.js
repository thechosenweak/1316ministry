import React from "react";
import { View, Text } from "react-native";
import { AppButton, AppTextInput } from '../../../components';

export default function LoginScreen(){

    const onLogin = () => {

    }

    return(
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{margin: 30}}>
                <AppTextInput 
                    placeholder={"Please ener username"}
                    onChangeText={(text) => console.log(text)}
                />
                <AppTextInput 
                    placeholder={"Please ener password"}
                    onChangeText={(text) => console.log(text)}
                />
                <AppButton 
                    contentStyle={{borderRadius: 6}}
                    name={'Login'}
                    onPress={onLogin}
                />
            </View>
        </View>
    )
}