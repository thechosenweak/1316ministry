import React from 'react';
import { AppTabBar } from '../../components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigatorDashboard from './NavigatorDashboard';
import NavigatorAccount from './NavigatorAccount';

const Tab = createBottomTabNavigator();

export default function MainStackNavigation() {

  const BlankScreen = () => {
      return null;
  }

  return (
    <Tab.Navigator
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="DashboardScreen" 
        component={NavigatorDashboard} 
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home" size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="ScanScreen" 
        component={BlankScreen} 
        options={{
          tabBarLabel: "QR",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="qrcode-scan" size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="AccountScreen" 
        component={NavigatorAccount} 
        options={{
          tabBarLabel: "Account",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="account-circle" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}