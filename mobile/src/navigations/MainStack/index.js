import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigatorDashboard from './NavigatorDashboard';

const Tab = createMaterialBottomTabNavigator();

export default function MainStackNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#1877F2"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen 
        name="NavigatorDashboard" 
        component={NavigatorDashboard} 
        options={{
            tabBarLabel: <Text>Dashboard</Text>,
            tabBarIcon: (props) => ( 
              <MaterialCommunityIcons name={props.focused ? "home" : "home-outline"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}} /> 
            ),
        }}
      />
      <Tab.Screen 
        name="Scan" 
        component={NavigatorDashboard} 
        options={{
            tabBarLabel: <Text>Scan</Text>,
            tabBarIcon: (props) => ( 
              <Ionicons name={props.focused ? "scan-sharp" : "scan-outline"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}}/> 
            ),
        }}
      />
      <Tab.Screen 
        name="AccountScreen" 
        component={NavigatorDashboard} 
        options={{
            tabBarLabel: <Text>Account</Text>,
            tabBarIcon: (props) => ( 
              <MaterialIcons name={props.focused ? "notifications-active" : "notifications-none"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}} /> 
            ),
        }}
      />
    </Tab.Navigator>
  );
}