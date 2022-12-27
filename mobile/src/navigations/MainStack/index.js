import React from 'react';
import { Text } from 'react-native';
import { AppCamera } from '../../components';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import NavigatorDashboard from './NavigatorDashboard';
import NavigatorAccount from './NavigatorAccount';

const Tab = createMaterialBottomTabNavigator();

export default function MainStack() {

  const [cameraVisible, setCameraVisible] = React.useState(false);

  const BlankScreen = () => {
    return null;
  }

  return (
    <>
      <Tab.Navigator
        initialRouteName="NavigatorDashboard"
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
          component={BlankScreen} 
          options={{
              tabBarLabel: <Text>Scan</Text>,
              tabBarIcon: (props) => ( 
                <Ionicons name={props.focused ? "scan-sharp" : "scan-outline"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}}/> 
              ),
          }}
          listeners={({ navigation }) => ({
              tabPress: (e) => {
                e.preventDefault();
                setCameraVisible(true);
              },
          })}
        />
        <Tab.Screen 
          name="AccountScreen" 
          component={NavigatorAccount} 
          options={{
              tabBarLabel: <Text>Account</Text>,
              tabBarIcon: (props) => ( 
                <MaterialCommunityIcons name={props.focused ? "account" : "account-outline"} size={24} style={{color:props.focused ? "#1877F2" : "gray"}}/> 
              ),
          }}
        />
      </Tab.Navigator>
      
      <AppCamera 
        cameraVisible={cameraVisible}
        setCameraVisible={() => setCameraVisible(!cameraVisible)}
      />
    </>
  );
}