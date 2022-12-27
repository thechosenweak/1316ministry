import React from "react";
import styles from './styles';
import { View, Text, Image, TouchableOpacity } from "react-native";
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
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', padding: 12, backgroundColor: 'white', marginTop: 1, marginBottom: 1}}>
                        <Text>View Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', padding: 12, backgroundColor: 'white', marginTop: 1, marginBottom: 1}}>
                        <Text>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}