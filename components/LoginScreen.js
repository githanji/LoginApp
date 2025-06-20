import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import users from '../data/users.json';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Check empty fields
    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Enter a valid email');
        valid = false;
      }
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (!valid) return;

    // Validate from JSON
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      alert(`Welcome back, ${email}!`);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Log In Now</Text>
      <Text style={styles.subtitle}>Please login to continue using our app</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (text) setEmailError('');
        }}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (text) setPasswordError('');
          }}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureText(!secureText)}
        >
          <Icon name={secureText ? 'eye-off' : 'eye'} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        Don't have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  logo: {
    width: 100, height: 100, marginBottom: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#0A3D62',
  },
  subtitle: {
    fontSize: 14, color: '#555', marginVertical: 10, textAlign: 'center',
  },
  input: {
    width: '100%', borderColor: '#CCC', borderWidth: 1,
    borderRadius: 8, padding: 12, marginTop: 10,
  },
  errorText: {
    color: 'red', alignSelf: 'flex-start', marginTop: 5, marginBottom: -5,
  },
  passwordContainer: {
    width: '100%', position: 'relative',
  },
  eyeIcon: {
    position: 'absolute', right: 10, top: 22,
  },
  forgot: {
    alignSelf: 'flex-end', color: '#0A3D62', marginBottom: 20, marginTop: 10,
  },
  button: {
    backgroundColor: '#0A3D62', padding: 15, borderRadius: 8, width: '100%',
  },
  buttonText: {
    color: '#FFF', textAlign: 'center', fontWeight: 'bold', fontSize: 16,
  },
  linkText: {
    marginTop: 20, color: '#555',
  },
  link: {
    color: '#0A3D62', fontWeight: 'bold',
  },
});
