import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppBar = ({
    screenTitle,
    onBackPress,
    isBackButtonShow=false
}) => {

    return (
        <View style={{height: 60, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingLeft: 6, paddingRight: 6}}>
            {
                isBackButtonShow && (
                    <TouchableOpacity onPress={onBackPress}>
                        <Ionicons name="chevron-back" size={28}  color='#7F7F7F' style={{color:'gray'}}/>
                    </TouchableOpacity>
                )
            }
            <Text style={{fontSize: 15, marginLeft: 6, fontWeight: 'bold'}}>{screenTitle}</Text>
        </View>
    )
}

export default AppBar;