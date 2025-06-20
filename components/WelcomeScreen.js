import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Welcome to MyLoginApp</Text>
      <Text style={styles.subtitle}>Let's get started by logging into your account.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  logo: {
    width: 120, height: 120, marginBottom: 20
  },
  title: {
    fontSize: 26, fontWeight: 'bold', color: '#0A3D62', textAlign: 'center'
  },
  subtitle: {
    fontSize: 16, color: '#555', textAlign: 'center', marginVertical: 10
  },
  button: {
    backgroundColor: '#0A3D62',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#FFF', fontSize: 16, fontWeight: 'bold'
  }
});
