import React from "react";
import { View, Text } from "react-native";
import { AppBar } from "../../../components";

export default function DashboardScreen({ navigation }){

    return(
        <>
            <AppBar 
                title="Dashboard"
            />
            <View style={{flex: 1, padding: 12}}>
                <View style={{backgroundColor: '#59BD6F', borderRadius: 6, padding: 6, marginBottom: 12}}>
                    <Text style={{fontWeight: '500', fontSize: 15, color: '#fff'}}>Attendance</Text>
                    <Text style={{fontSize: 12, color: '#fff'}}>This month</Text>
                    <Text style={{fontSize: 16, color: '#fff'}}>3</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 12}}>
                    <View style={{backgroundColor: '#F35252', borderRadius: 6, padding: 6, flex: 1}}>
                        <Text style={{fontWeight: '500', fontSize: 15, color: '#fff'}}>Absence</Text>
                        <Text style={{fontSize: 12, color: '#fff'}}>This month</Text>
                        <Text style={{fontSize: 16, color: '#fff'}}>3</Text>
                    </View>
                    <View style={{width: 12}} />
                    <View style={{backgroundColor: '#EFAB45', borderRadius: 6, padding: 6, flex: 1}}>
                        <Text style={{fontWeight: '500', fontSize: 15, color: '#fff'}}>Late</Text>
                        <Text style={{fontSize: 12, color: '#fff'}}>This month</Text>
                        <Text style={{fontSize: 16, color: '#fff'}}>3</Text>
                    </View>
                </View>
            </View>
        </>
    )
}