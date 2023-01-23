import React from "react";
import { View, Text, TextInput } from "react-native";

const AppTextInput = ({
    placeholder,
    value,
    onChangeText,
    textInputStyle,
    keyboardType
}) => {
    return(
        <TextInput 
            style={textInputStyle}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    )
}

export default AppTextInput;