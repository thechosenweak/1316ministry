import React from "react";
import { View, Image } from "react-native";
import { AppButton, AppTextInput } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../redux/reducer/User';

export default function LoginScreen(){

    const dispatch = useDispatch();
    const [username, setUsername] = React.useState({text: '', isEmpty: true});
    const [password, setPassword] = React.useState({text: '', isEmpty: true});

    const onLogin = () => {
        if(username.text.trim() === ''){
            Toast.show({
                type: 'warning',
                text1: 'Please enter username',
            });
        } else if(password.text.trim() === ''){
            Toast.show({
                type: 'warning',
                text1: 'Please enter password',
            });
        } else {
            Toast.show({
                type: 'success',
                text1: 'Successfully signed in',
            });
            dispatch(setUserData({fname: 'Yow!'}));
        }
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center'}}>
            <Image
                style={{height: 200, width: 200, resizeMode: 'contain'}}
                source={require('../../../assets/images/logo.png')}
            />
            <View style={{margin: 30, width: '85%', backgroundColor: '#ECF9FF', padding: 15, borderRadius: 12}}>
                <AppTextInput 
                    placeholder={"Username"}
                    icon={<AntDesign name="user" size={24} />}
                    onChangeText={(text) => setUsername({text: text, isEmpty: !text ? true : false})}
                    isEmpty={username.isEmpty}
                />
                <AppTextInput 
                    placeholder={"Password"}
                    icon={<AntDesign name="lock" size={24} />}
                    onChangeText={(text) => setPassword({text: text, isEmpty: !text ? true : false})}
                    secureTextEntry={true}
                    isEmpty={password.isEmpty}
                />
                <AppButton 
                    contentStyle={{borderRadius: 6, marginTop: 12}}
                    name={'Login'}
                    onPress={onLogin}
                />
            </View>
        </View>
    )
}