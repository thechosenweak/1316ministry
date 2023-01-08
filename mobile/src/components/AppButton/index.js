import React from 'react';
import styles from './styles';
import { TouchableOpacity, View, Text } from 'react-native';

const AppButton = ({
    name,
    onPress,
    textStyle,
    containerStyle,
    rightIcon
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.containerStyle, containerStyle]}>
                <Text style={[styles.textStyle, textStyle]}>{name}</Text>
                {rightIcon}
            </View>
        </TouchableOpacity>
    )
}

export default AppButton;