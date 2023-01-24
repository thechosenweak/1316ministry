import React from "react";
import { View, Text, TextInput } from "react-native";

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
        <View style={{
                backgroundColor: '#fff', 
                borderRadius: 8, 
                marginBottom: 8, 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingLeft: 8,
                borderStartWidth: 3,
                borderColor: isEmpty ? '#363636' : '#64C1EF'
            }}>
            {icon}
            <TextInput 
                style={[{color: '#363636', flex: 1}, textInputStyle]}
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