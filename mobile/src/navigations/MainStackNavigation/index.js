import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigatorDashboard from './NavigatorDashboard';
import NavigatorAccount from './NavigatorAccount';

const Tab = createBottomTabNavigator();

export default function MainStackNavigation() {
  
  return (
    <>
      <Tab.Navigator
        activeColor="#1877F2"
        barStyle={{ backgroundColor: '#fff'}}
      >
        <Tab.Screen 
          name="NavigatorDashboard" 
          component={NavigatorDashboard} 
          options={{
              tabBarLabel: <Text style={{}}>Home</Text>,
              tabBarIcon: (props) => ( 
                <MaterialCommunityIcons name={props.focused ? "home" : "home-outline"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}} />  
              ),
          }}
        />
        <Tab.Screen 
          name="NavigatorAccount" 
          component={NavigatorAccount} 
          options={{
              tabBarLabel: <Text style={{}}>Notification</Text>,
              tabBarIcon: (props) => ( 
                <MaterialIcons name={props.focused ? "notifications-active" : "notifications-none"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}} /> 
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}