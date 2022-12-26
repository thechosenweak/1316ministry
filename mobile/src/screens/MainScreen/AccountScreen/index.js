import React from "react";
import styles from './styles';
import { View, Text } from "react-native";
import { AppBar } from "../../../components";

export default function AccountScreen({navigation}){
    
    return (
        <View>
            <AppBar 
                screenTitle="Account"
                onBackPress={() => navigation.goBack()}
            />
        </View>
    )
}