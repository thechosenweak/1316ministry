import React from "react";
import { View, Text } from "react-native";
import Ripple from 'react-native-material-ripple';

const AppButton = ({
    name,
    onPress,
    onLongPress,
    contentStyle,
    textStyle,
    icon,
    rightIcon
}) => {

    const [isPressed, setIsPressed] = React.useState(false);

    const Press = () => {
        if(!onPress) return;
        if(isPressed) return;

        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
            onPress();
        }, 200)
    }

    return(
        <Ripple
            onPress={Press}
            onLongPress={onLongPress}
            style={[{backgroundColor: '#64C1EF', padding: 12, flexDirection: 'row'}, contentStyle]}
        >
            {icon}
            <Text style={[{color: 'white', flex: 1}, {marginLeft: icon ? 8 : 0}, textStyle]}>{name}</Text>
            {rightIcon}
        </Ripple>
    )
}

export default AppButton;