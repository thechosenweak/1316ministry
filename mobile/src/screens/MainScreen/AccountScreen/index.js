import React from "react";
import styles from './styles';
import { View, Text, Image } from "react-native";
import { AppBar, AppButton } from "../../../components";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../redux/reducer/User';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AccountScreen({navigation}){
    
    const dispatch = useDispatch();
    const rightIcon = <AntDesign name={"right"} size={24} />

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
                <AppButton 
                    name="View Profile"
                    textStyle={styles.textButtonStyle}
                    containerStyle={styles.buttonStyle} 
                    rightIcon={rightIcon}
                />
                <View>
                    <View style={{height:12}} />
                    <Text style={{fontWeight: "bold", marginBottom: 6, marginLeft: 6, fontSize: 15}}>Admin</Text>
                    <AppButton 
                        name="Members"
                        textStyle={styles.textButtonStyle}
                        containerStyle={styles.buttonStyle} 
                        rightIcon={rightIcon}
                    />
                    <AppButton 
                        name="Role"
                        textStyle={styles.textButtonStyle}
                        containerStyle={styles.buttonStyle} 
                        rightIcon={rightIcon}
                    />
                    <AppButton 
                        name="Small group"
                        textStyle={styles.textButtonStyle}
                        containerStyle={styles.buttonStyle} 
                        rightIcon={rightIcon}
                    />
                    <AppButton 
                        name="Attendance"
                        textStyle={styles.textButtonStyle}
                        containerStyle={styles.buttonStyle} 
                        rightIcon={rightIcon}
                    />
                </View>
                <View style={{height:12}} />
                <AppButton 
                    name="Logout"
                    textStyle={[styles.textButtonStyle, {color: 'red'}]}
                    containerStyle={styles.buttonStyle} 
                    rightIcon={<MaterialCommunityIcons name={"logout"} size={24} />}
                />
            </View>
        </>
    )
}