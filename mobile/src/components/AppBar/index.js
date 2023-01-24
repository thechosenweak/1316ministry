import React from "react";
import styles from './styles';
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

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
                        <AntDesign name="left" size={21} />
                    </TouchableOpacity>
                )
            }
            <Text style={{flex: 1, fontWeight: 500}}>{title}</Text>
            {rightContent}
        </View>
    )
}

export default AppBar;