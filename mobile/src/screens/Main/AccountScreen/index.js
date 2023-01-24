import React from "react";
import { View, Text, Image } from "react-native";
import { AppBar, AppButton } from "../../../components";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../redux/reducer/User';

export default function AccountScreen(){

    const dispatch = useDispatch();

    const onSignout = () => {
        dispatch(setUserData(null));
    }

    return(
        <>
            <AppBar 
                title="Account"
            />
            <View style={{flex: 1}}>
                <View style={{
                    padding: 12, 
                    backgroundColor: '#fff', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    borderBottomWidth: .5, 
                    borderColor: '#cccccc'
                }}>
                    <Image
                        style={{height: 120, width: 120, resizeMode: 'contain', borderRadius: 99}}
                        source={require('../../../assets/images/logo.png')}
                    />
                    <Text style={{marginLeft: 12, fontWeight: '500', fontSize: 15}}>Abcdefg</Text>
                </View>
                <AppButton 
                    name="View Profile"
                    icon={<FontAwesome name="user" size={21} />}
                    rightIcon={<MaterialIcons name="keyboard-arrow-right" size={21} />}
                    contentStyle={{backgroundColor: '#fff', borderBottomWidth: .5, borderColor: '#cccccc'}}
                    textStyle={{color: '#000'}}
                />
                <AppButton 
                    name="Administrator"
                    icon={<FontAwesome name="user-secret" size={21} />}
                    rightIcon={<MaterialIcons name="keyboard-arrow-right" size={21} />}
                    contentStyle={{backgroundColor: '#fff', borderBottomWidth: .5, borderColor: '#cccccc'}}
                    textStyle={{color: '#000'}}
                />
                <AppButton 
                    name="Signout"
                    icon={<Feather name="log-out" size={21} />}
                    contentStyle={{backgroundColor: '#fff', borderBottomWidth: .5, borderColor: '#cccccc'}}
                    textStyle={{color: 'red'}}
                    onPress={onSignout}
                />
            </View>
        </>
    )
}