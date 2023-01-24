import React from "react";
import { View, Image } from "react-native";
import { AppButton, AppTextInput } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LoginScreen(){

    const [username, setUsername] = React.useState({text: '', isEmpty: true});
    const [password, setPassword] = React.useState({text: '', isEmpty: true});

    const onLogin = () => {
        if(username.text.trim() === ''){

        } else if(password.text.trim() === ''){

        } else {

        }
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#ECF9FF', alignItems: 'center'}}>
            <Image
                style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 99}}
                source={require('../../../assets/images/logo.png')}
            />
            <View style={{margin: 30, width: '80%'}}>
                <AppTextInput 
                    placeholder={"Please ener username"}
                    icon={<AntDesign name="user" size={24} />}
                    onChangeText={(text) => setUsername({text: text, isEmpty: !text ? true : false})}
                    isEmpty={username.isEmpty}
                />
                <AppTextInput 
                    placeholder={"Please ener password"}
                    icon={<AntDesign name="lock" size={24} />}
                    onChangeText={(text) => setPassword({text: text, isEmpty: !text ? true : false})}
                    secureTextEntry={true}
                    isEmpty={password.isEmpty}
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