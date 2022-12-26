import { View, Text, TextInput } from 'react-native';
import React from 'react';

const AppTextInput = ({
  placeholder,
  placeholderTextColor,
  onChangeText,
  defaultValue,
  secureTextEntry,
  containerStyle,
  textInputStyle,
  title,
  isValid=true
}) => {
  return (
    <View style={[containerStyle]}>
        {
          title && <Text style={{fontWeight: 'bold', marginBottom: 6, color: isValid ? '#616161' : 'red'}}>{title}</Text>
        }
        <View style={{borderRadius: 12, backgroundColor: '#f7f7f7', padding: 8, borderWidth: 1, borderColor: isValid ? '#f7f7f7' : 'red'}}>
          <TextInput 
              placeholderTextColor={placeholderTextColor}
              placeholder={placeholder}
              onChangeText={onChangeText}
              defaultValue={defaultValue}
              style={[{padding: 0}, textInputStyle]}
              secureTextEntry={secureTextEntry}
          />
        </View>
    </View>
  )
}

export default AppTextInput;