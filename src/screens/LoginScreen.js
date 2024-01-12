import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isPasswordActive, setIsPasswordActive] = useState(false);

  const inputEmailStyle = isEmailActive ? styles.inputActive : styles.input;
  const inputPasswordStyle = isPasswordActive ? styles.inputActive : styles.input;

  const handleLogin = () => {
    // Placeholder for future authentication logic
    // For now, simply navigate to the Home screen
    navigation.navigate('Home')
  };

  return (
   <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/icons/Profile.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome!</Text>
        <Text>Log in to your existing account.</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={inputEmailStyle}
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setIsEmailActive(true)}
          onBlur={() => setIsEmailActive(false)}
          value={email}
          placeholder="Email"
          placeholderTextColor="#6aa84fff"
        />
        <TextInput
          style={inputPasswordStyle}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setIsPasswordActive(true)}
          onBlur={() => setIsPasswordActive(false)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#6aa84fff"
        />

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don’t have an account?{' '}
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>

        <Pressable style={styles.demobutton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>View Demo</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    resizeMode: 'contain',
    padding: 20,
    margin: 20,
    width: 180,
    height: 180,
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    color: '#6aa84fff',
  },
  formContainer: {
    paddingBottom: 200,
  },
  input: {
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    color: 'black',
  },
  inputActive: {
    height: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#eee',
    borderColor: '#5cb85c',
    color: 'black',
  },
  buttonContainer: {
    margin: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5cb85c',
    borderRadius: 10,
    padding: 12,
  },
  demobutton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 7,
    marginTop: 20,
    marginLeft: '24%',
    width: '58%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    textAlign: 'center',
  },
  signUpLink: {
    color: '#5cb85c',
  },
});

export default LoginScreen;
