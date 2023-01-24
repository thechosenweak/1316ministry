import React from "react";
import styles from './styles';
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppBar = ({
    title,
    onBackPress,
    rightContent
}) => {
    return(
        <View style={[styles.container, {paddingLeft: onBackPress ? 0 : 17}]}>
            {
                onBackPress && (
                    <TouchableOpacity 
                        style={{width: 40, alignItems: 'center'}}
                        onPress={onBackPress}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={24} />
                    </TouchableOpacity>
                )
            }
            <Text style={{flex: 1, fontWeight: 500}}>{title}</Text>
            {rightContent}
        </View>
    )
}

export default AppBar;