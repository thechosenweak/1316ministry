import React from "react";
import { View, Text } from "react-native";
import Ripple from 'react-native-material-ripple';

const AppTabBar = ({ 
    state, 
    descriptors, 
    navigation 
}) => {
    return(
        <View 
            style={{ 
                flexDirection: 'row',
                borderTopWidth: .5, 
                borderColor: '#cccccc',
                backgroundColor: '#fff'
            }}
        >
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
                    if (!isFocused) {
                        if(label === 'QR'){
                            navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });
                        } else {
                            navigation.navigate(route.name);
                        }
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
                        testID={options.tabBarTestID}
                        style={{ 
                            flex: 1, 
                            alignItems: 'center', 
                            padding: 8,
                        }}
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