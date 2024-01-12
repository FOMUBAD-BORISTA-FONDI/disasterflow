import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';

const Report = ({ navigation }) => {
  const [casualties, setCasualties] = useState('');
  const [location, setLocation] = useState('');
  const [incidentPhoto, setIncidentPhoto] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedUrgency, setSelectedUrgency] = useState(null); // Added state for urgency
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handleSendReport = () => {
    // Implement logic to send the report
    console.log('Sending Report...', { casualties, location, incidentPhoto, selectedOption, selectedUrgency });
    // Additional logic, e.g., API calls, can be added here
  };

  const handleTakePhoto = async () => {
    if (hasCameraPermission) {
      const photo = await takePhoto();
      setIncidentPhoto(photo);
    }
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      return uri;
    }
    return null;
  };

  const renderRadioButton = (option) => (
    <TouchableOpacity
      key={option.id}
      style={[styles.radioButton, selectedOption === option.label && styles.radioButtonSelected]}
      onPress={() => setSelectedOption(option.label)}
    >
      <Text style={styles.radioButtonLabel}>{option.label}</Text>
    </TouchableOpacity>
  );

  const renderUrgencyRadioButton = (option) => (
    <TouchableOpacity
      key={option.id}
      style={[styles.radioButton, selectedUrgency === option.label && styles.radioButtonSelected]}
      onPress={() => setSelectedUrgency(option.label)}
    >
      <Text style={styles.radioButtonLabel}>{option.label}</Text>
    </TouchableOpacity>
  );

  const radioOptions = [
    { id: '1', label: 'High' },
    { id: '2', label: 'Medium' },
    { id: '3', label: 'Low' },
  ];

  const urgencyOptions = [
    { id: '1', label: 'High' },
    { id: '2', label: 'Medium' },
    { id: '3', label: 'Low' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Send Report</Text>

        {/* Number of Casualties Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Casualties</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the number of casualties"
            keyboardType="numeric"
            value={casualties}
            onChangeText={(text) => setCasualties(text)}
          />
        </View>

        {/* Location Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Current Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your current location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>

        {/* Incident Photo */}
        <View style={styles.photoContainer}>
          <Text style={styles.label}>Incident Photo</Text>
          <TouchableOpacity style={styles.takePhotoButton} onPress={handleTakePhoto}>
            <Text style={styles.takePhotoButtonText}>Take Photo</Text>
          </TouchableOpacity>
          {incidentPhoto && (
            <Image source={{ uri: incidentPhoto }} style={styles.incidentPhoto} resizeMode="cover" />
          )}
          {hasCameraPermission && (
            <Camera style={styles.cameraPreview} type={Camera.Constants.Type.back} ref={cameraRef} />
          )}
        </View>

        {/* Radio Buttons for Casualties */}
        <Text style={styles.label}>Impacts?</Text>
        <View style={styles.radioGroup}>
          {radioOptions.map(renderRadioButton)}
        </View>

        {/* Radio Buttons for Urgency */}
        <Text style={styles.label}>Urgency?</Text>
        <View style={styles.radioGroup}>
          {urgencyOptions.map(renderUrgencyRadioButton)}
        </View>

        {/* Send Report Button */}
        <TouchableOpacity style={styles.sendReportButton} onPress={handleSendReport}>
          <Text style={styles.sendReportButtonText}>Send Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  photoContainer: {
    marginBottom: 20,
  },
  takePhotoButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  takePhotoButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  incidentPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
  },
  cameraPreview: {
    flex: 1,
    height: 200,
    marginTop: 10,
  },
  sendReportButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendReportButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    color: 'white',
  },
  radioButtonSelected: {
    backgroundColor: '#000',
    color: 'white',
  },
  radioButtonLabel: {
    color: '#000',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    color: 'white',
  },
  radioButtonSelected: {
    backgroundColor: '#000',
    color: 'white',
  },
  radioButtonLabel: {
    color: '#000',
  },
});

export default Report;