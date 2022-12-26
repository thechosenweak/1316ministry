import React from "react";
import styles from './styles';
import { View, Text } from "react-native";
import { AppBar } from "../../../components";

export default function DashboardScreen({navigation}){
    
    return (
        <View>
            <AppBar 
                screenTitle="Dashboard"
                onBackPress={() => navigation.goBack()}
            />
        </View>
    )
}