import React from "react";
import { View, Text } from "react-native";
import { AppBar } from "../../../components";

export default function DashboardScreen({ navigation }){

    return(
        <>
            <AppBar 
                title="Dashboard"
            />
            <Text>DashboardScreen</Text>
        </>
    )
}