import React from "react";
import styles from './styles';
import { View, Text, Image } from "react-native";
import { AppBar, AppButton } from "../../../components";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../redux/reducer/User';

export default function AccountScreen({navigation}){
    
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(setUserData(null))
    }

    return (
        <>
            <AppBar 
                screenTitle="Account"
                onBackPress={() => navigation.goBack()}
            />
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', flexDirection: 'row', padding: 12, backgroundColor: 'white', marginTop: 1}}>
                    <Image
                        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
                        style={styles.profileImage}
                    />
                    <Text style={{marginLeft: 12, fontWeight: "bold", fontSize: 20, color: 'green'}}>Abcd efghi</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', backgroundColor: 'white', marginTop: 1, padding: 12}}>
                    <AppButton name="View Profile" containerStyle={{width: '100%'}} />
                    <AppButton name="Log Out" containerStyle={{backgroundColor: 'red'}} onPress={onLogout} />
                </View>
            </View>
        </>
    )
}