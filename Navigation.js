import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from "./screens/Home";
import Account from './screens/Account';
import Main from './screens/Main';
import LoginEmpresa from './screens/LoginEmpresa';
import LoginUser from './screens/LoginUser';
import RegisterUser from './screens/RegisterUser';
import RegisterEmpresa from './screens/RegisterEmpresa';

//Variables
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginUser" 
          component={LoginUser} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginEmpresa" 
          component={LoginEmpresa} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RegisterUser" 
          component={RegisterUser} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RegisterEmpresa" 
          component={RegisterEmpresa} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function MainTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'purple',
        }}
      >
        <Tab.Screen 
          name="Lista de Productos" 
          component={Main} 
          options={{
            tabBarLabel: 'Productos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={Account} 
          options={{
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }
}