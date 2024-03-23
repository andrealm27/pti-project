import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginEmpresa from "./LoginEmpresa";
import LoginUser from "./LoginUser";

const Home = () => {
  const navigation = useNavigation();

  const handleLoginUserPress = () => {
    navigation.navigate("LoginUser");
  };

  const handleLoginEmpresaPress = () => {
    navigation.navigate("LoginEmpresa");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecciona cómo quieres autenticarte:</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginUserPress}>
        <Text style={styles.buttonText}>Usuario</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLoginEmpresaPress}>
        <Text style={styles.buttonText}>Empresa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Home;
