import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RegisterEmpresa = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '') {
        Alert.alert('Error', 'El nombre de usuario y la contraseña son obligatorios.');
        return;
    }
    if (username.length < 5) {
        Alert.alert('Error', 'El nombre de usuario debe tener al menos 5 carácteres.');
        return;
    }
    if (password.length < 7) {
        Alert.alert('Error', 'La contraseña debe tener al menos 5 carácteres.');
        return;
    }

    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
    const digitCount = (password.match(/\d/g) || []).length;

    if (letterCount < 5 || digitCount < 2) {
      Alert.alert('Error', 'La contraseña debe tener al menos 5 letras y 2 dígitos.');
      return;
    }
      if (!/^[a-zA-Z0-9]+$/.test(username)) {
        Alert.alert('Error', 'El nombre de usuario solo puede contener letras y números.');
        return;
      }
    // Luego, llamas a la función de registro pasada como prop
    onRegister({ username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterEmpresa;