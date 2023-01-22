import React from "react";
import { View, Text } from "react-native";
import Ripple from 'react-native-material-ripple';

const AppTabBar = ({ 
    state, 
    descriptors, 
    navigation 
}) => {
    return(
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const icon = options.tabBarIcon ? options.tabBarIcon : null;
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });
    
                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };
    
            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };
    
            return (
                <Ripple
                    key={index}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1, alignItems: 'center', padding: 8 }}
                    testID={options.tabBarTestID}
                >
                    {icon()}
                    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                        {label}
                    </Text>
                </Ripple>
            );
        })}
      </View>
    )
}

export default AppTabBar;