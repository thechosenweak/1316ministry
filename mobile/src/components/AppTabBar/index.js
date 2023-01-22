import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const AppTabBar = ({ 
    state, 
    descriptors, 
    navigation 
}) => {
    return(
        <View style={{ flexDirection: 'row', padding: 8 }}>
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
                <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1, alignItems: 'center' }}
                >   
                    {icon()}
                    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                        {label}
                    </Text>
                </TouchableOpacity>
            );
        })}
      </View>
    )
}

export default AppTabBar;