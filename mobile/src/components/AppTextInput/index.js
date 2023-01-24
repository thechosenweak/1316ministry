import React from "react";
import styles from './styles';
import { View, TextInput } from "react-native";

const AppTextInput = ({
    placeholder,
    value,
    onChangeText,
    textInputStyle,
    keyboardType,
    secureTextEntry,
    icon,
    isEmpty
}) => {
    return(
        <View style={[styles.container, {borderColor: isEmpty ? '#363636' : '#64C1EF'}]}>
            {icon}
            <TextInput 
                style={[styles.textInput, textInputStyle]}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default AppTextInput;