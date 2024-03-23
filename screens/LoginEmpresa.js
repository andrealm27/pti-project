import React from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import RegisterEmpresa from './RegisterEmpresa';
import Home from './Home';

const LoginEmpresa = ({ onLogin, onRegister, textInputStyle }) => {
  const navigation = useNavigation();
  const handleLogin = () => {
    onLogin();
  };
  const handleRegister = () => {
    navigation.navigate("RegisterEmpresa");
  };
  const handleAtrasPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, styles.background]}>
      <Text style={styles.titulo}>DIGITAL PRODUCT PASSPORT</Text>
      <Text style={styles.text1}>Ingrese sus credenciales como empresa:</Text>
      <Text style={styles.label}>Nombre de usuario empresarial</Text>
      <TextInput
        placeholder="Nombre de usuario empresarial"
        style={[styles.input, textInputStyle]}
        multiline={false}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={[styles.input, textInputStyle]}
        multiline={false}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonTextLogin}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>¿No te has registrado aún?</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonTextRegister}>Regístrate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleAtrasPress}>
        <Text style={styles.buttonTextAtras}>Volver a la página anterior</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
  background: {
    backgroundColor: '#1e2749', // Color de fondo azul grisáceo
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 15,
    marginBottom: 10,
    width: '300',
  },
  label: {
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  titulo:{
    color: 'grey',
    marginBottom: 5,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    marginBottom: 5,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    
  },
  text2: {
    color: 'white',
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextLogin: {
    backgroundColor: 'green', 
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonTextRegister: {
    backgroundColor: 'red', 
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonTextAtras: {
    backgroundColor: 'blue', 
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 5,
    marginTop: 10,
  },
  
});

export default LoginEmpresa;