import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';


const ResponseScreen = ({ route }) => {
  const { notificationId } = route.params;
  const [responseText, setResponseText] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleResponse = () => {
    // Implement logic to send the response
    console.log('Sending Response...', { notificationId, responseText, isChecked });
    // Additional logic, e.g., API calls, can be added here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Response Screen</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Notification ID: {notificationId}</Text>
        <Text style={styles.label}>Response Text</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your response"
          value={responseText}
          onChangeText={(text) => setResponseText(text)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxLabel}>Medical Assurance</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxLabel}>Fire Fighting</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxLabel}>Evacuation</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxLabel}>Crime Control</Text>
      </View>

      <TouchableOpacity style={styles.sendResponseButton} onPress={handleResponse}>
        <Text style={styles.sendResponseButtonText}>Send Response</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  sendResponseButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  sendResponseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResponseScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import Checkbox from 'expo-checkbox';

// const ResponseScreen = ({ route }) => {
//   const { notificationId } = route.params;
//   const [responseText, setResponseText] = useState('');

//   // Array of state values for checkboxes
//   const [checkboxStates, setCheckboxStates] = useState([
//     { label: 'Medical Assurance', checked: false },
//     { label: 'Fire Fighting', checked: false },
//     { label: 'Evacuation', checked: false },
//     { label: 'Crime Control', checked: false },
//   ]);

//   const handleCheckboxChange = (index) => {
//     // Update the state based on the checkbox index
//     const updatedCheckboxStates = [...checkboxStates];
//     updatedCheckboxStates[index].checked = !updatedCheckboxStates[index].checked;
//     setCheckboxStates(updatedCheckboxStates);
//   };

//   const handleResponse = () => {
//     // Implement logic to send the response
//     console.log('Sending Response...', { notificationId, responseText, checkboxStates });
//     // Additional logic, e.g., API calls, can be added here
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Response Screen</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Notification ID: {notificationId}</Text>
//         <Text style={styles.label}>Response Text</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your response"
//           value={responseText}
//           onChangeText={(text) => setResponseText(text)}
//         />
//       </View>

//       {checkboxStates.map((checkbox, index) => (
//         <View key={index} style={styles.checkboxContainer}>
//           <Checkbox
//             style={styles.checkbox}
//             value={checkbox.checked}
//             onValueChange={() => handleCheckboxChange(index)}
//             color={checkbox.checked ? '#4630EB' : undefined}
//           />
//           <Text style={styles.checkboxLabel}>{checkbox.label}</Text>
//         </View>
//       ))}

//       <TouchableOpacity style={styles.sendResponseButton} onPress={handleResponse}>
//         <Text style={styles.sendResponseButtonText}>Send Response</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // ... existing styles
// });
