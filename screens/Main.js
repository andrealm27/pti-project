import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginUser from './LoginUser';
import LoginEmpresa from './LoginEmpresa';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="LoginEmpresa" component={LoginEmpresa} />
    </Stack.Navigator>
  );
}
