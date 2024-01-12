import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/Profile.png')} style={styles.profileImage} />

      <Text style={styles.username}>Fomubad Borista</Text>
      <Text style={styles.email}>borista.fomubad@gmail.com</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Icon name="calendar" size={20} color="#333" />
          <Text style={styles.infoText}>Joined: January 2022</Text>
        </View>

        <View style={styles.infoItem}>
          <Icon name="map-marker" size={20} color="#333" />
          <Text style={styles.infoText}>Location: City, Country</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  editProfileButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
