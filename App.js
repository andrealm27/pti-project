import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import LoginEmpresa from './screens/LoginEmpresa';
import LoginUser from './screens/LoginUser';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { useState } from 'react';
const Stack = createStackNavigator();
import Main from './screens/Main';
export default function App() {

  const [user, setUser] = useState([]);
  
  return (
    <Navigation />
    
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2749',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  textInput: {
    color: 'white',
  },
});
