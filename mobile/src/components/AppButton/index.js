import React from "react";
import { View, Text } from "react-native";
import Ripple from 'react-native-material-ripple';

const AppButton = ({
    name,
    onPress,
    onLongPress,
    contentStyle,
    textStyle
}) => {
    return(
        <Ripple
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{backgroundColor: '#64C1EF', padding: 12}, contentStyle]}
        >
            <View>
                <Text style={[{textAlign: 'center', color: 'white'}, textStyle]}>{name}</Text>
            </View>
        </Ripple>
    )
}

export default AppButton;