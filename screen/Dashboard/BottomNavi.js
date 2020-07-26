import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../Dashboard/Dashboard';
import Video from '../Dashboard/Video';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
          activeBackgroundColor:'#001a33',
          inactiveBackgroundColor:'#001a33',
        activeTintColor: '#07dbdb',
        inactiveTintColor:'#ffffff'
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Dashboard}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Videocall"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}

export default function  BottomNavi() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
