import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RadioButtonRN from 'radio-buttons-react-native';

function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isHealthy, setIsHealthy] = useState(false);

  const toggleHealthStatus = () => {
    setIsHealthy(!isHealthy);
  };

  const radioButtonsData = [
    { label: 'Male' },
    { label: 'Female' },
  ];

  const handleRegistration = () => {
    // Placeholder for future registration logic
    // For now, simply navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headerTitle}>Let’s Get Started!</Text>
        <Text>Create a new account to access all features</Text>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Phone Number"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Create New Password"
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            placeholder="Confirm New Password"
          />

          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Healthy?"
              checked={isHealthy}
              onPress={toggleHealthStatus}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
            />
          </View>

          <RadioButtonRN
            data={radioButtonsData}
            selectedBtn={(e) => console.log(e)}
            style={styles.radioButtonContainer}
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleRegistration}>
              <Text style={styles.buttonText}>CREATE</Text>
            </Pressable>
          </View>

          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Log In Here</Text>
            </Pressable>
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    color: '#6aa84fff',
  },
  formContainer: {
    paddingBottom: 100,
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginText: {
    textAlign: 'center',
  },
  loginLink: {
    color: '#5cb85c',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 10,
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginBottom: 20,
    padding: 20,
  },
});

export default RegisterScreen;






// import React, { useState } from 'react';
// import { StyleSheet, ScrollView, View, Text, TextInput, Pressable } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import RadioButtonRN from 'radio-buttons-react-native';

// function RegisterScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isHealthy, setIsHealthy] = useState(false);

//   const toggleHealthStatus = () => {
//     setIsHealthy(!isHealthy);
//   };

//   const radioButtonsData = [
//     { label: 'Male' },
//     { label: 'Female' },
//   ];

//   const handleRegistration = () => {
//     // Placeholder for future registration logic
//     // For now, simply navigate to the Login screen
//     navigation.navigate('LoginScreen');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.logoContainer}>
//         <Text style={styles.headerTitle}>Let’s Get Started!</Text>
//         <Text>Create a new account to access all features</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           onChangeText={setName}
//           value={name}
//           placeholder="Name"
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={setEmail}
//           value={email}
//           placeholder="Email"
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={setPhone}
//           value={phone}
//           placeholder="Phone Number"
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={setPassword}
//           value={password}
//           secureTextEntry={true}
//           placeholder="Create New Password"
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={setConfirmPassword}
//           value={confirmPassword}
//           secureTextEntry={true}
//           placeholder="Confirm New Password"
//         />

//         <View style={styles.checkboxContainer}>
//           <CheckBox
//             title="Healthy?"
//             checked={isHealthy}
//             onPress={toggleHealthStatus}
//             containerStyle={styles.checkbox}
//             textStyle={styles.checkboxText}
//           />
//         </View>

//         <RadioButtonRN
//           data={radioButtonsData}
//           selectedBtn={(e) => console.log(e)}
//           style={styles.radioButtonContainer}
//         />

//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button} onPress={handleRegistration}>
//             <Text style={styles.buttonText}>CREATE</Text>
//           </Pressable>
//         </View>

//         <Text style={styles.loginText}>
//           Already have an account?{' '}
//           <Pressable onPress={() => navigation.navigate('LoginScreen')}>
//             <Text style={styles.loginLink}>Log In Here</Text>
//           </Pressable>
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     marginTop: -200,
//   },
//   logoContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 10,
//   },
//   headerTitle: {
//     fontSize: 30,
//     color: '#6aa84fff',
//   },
//   formContainer: {
//     paddingBottom: 100,
//   },
//   input: {
//     height: 50,
//     margin: 12,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   buttonContainer: {
//     margin: 12,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#5cb85c',
//     borderRadius: 10,
//     padding: 12,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   loginText: {
//     textAlign: 'center',
//   },
//   loginLink: {
//     color: '#5cb85c',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkbox: {
//     backgroundColor: 'transparent',
//     borderWidth: 0,
//     marginLeft: 10,
//   },
//   checkboxText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '60%',
//     marginBottom: 20,
//     padding: 20,
//   },
// });

// export default RegisterScreen;
